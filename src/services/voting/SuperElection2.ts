import ElectionCache from './ElectionCache';
import { parseScoredBallot, serializeList, serializeScoredBallot } from './helpers';

type ResultSimple = {
  [candidate: string]: number;
};

type ResultDetailed = {
  [candidate: string]: {
    score: number;
    [key: string]: any;
  };
};

class SuperElection {
  _cache: { [key: string]: ElectionCache} = {};
  candidates: string[];
  totalVoters: number;
  ballotsScored: {
    [key: ReturnType<typeof serializeScoredBallot>]: {
      weight: number;
      ballot: { [key: string]: number };
      rankings: string[][];
      highestScore: number;
      lowestScore: number;
    };
  } = {};
  ballotsRanked: { 
    [key: ReturnType<typeof serializeList>]: {
      weight: number;
      ballot: string[];
    };
  } = {};

  constructor(
    candidates: string[], 
    ballots: { [key: string]: number }[],
    weights: number[]
  ) {
    /* Assumptions:
       - weights length should equal the number of ballots
    */

    /* 1 ===CANDIDATES=== */
    this.candidates = [...candidates].sort();
    this.totalVoters = weights.reduce((a, w) => a + w, 0);

    /* 2 ===BALLOTSSCORED=== */
    ballots.forEach((scoredBallot, i) => {
      // round to 3 decimal places
      const roundedBallot = this.candidates
        .reduce((acc: { [key: string]: number }, candidate) => {
          acc[candidate] = Math.round(scoredBallot[candidate] * 1000) / 1000;
          return acc;
        }, {})
      ;

      // serialize the ballot and save it to this.ballotsScored
      const serialized = serializeScoredBallot(roundedBallot);

      if (this.ballotsScored[serialized]) {
        const weight = ~~this.ballotsScored[serialized].weight + weights[i];
        this.ballotsScored[serialized].weight = weight;
      } else {
        // parse the scoredBallot for its ranked equivalents 
        // as well as highest/lowest scores
        const [rankings, highestScore, lowestScore] = parseScoredBallot(roundedBallot);

        this.ballotsScored[serialized] = {
          weight: weights[i],
          ballot: roundedBallot,
          rankings,
          highestScore,
          lowestScore,
        };
      }
    });

    /* 3 ===BALLOTSRANKED=== */
    // for convenience, save all the ranked ballots into this.ballotsRanked
    Object.values(this.ballotsScored).forEach(({ rankings, weight }) => {
      if (rankings?.length) {
        for (let ranking of rankings) {
          const proportionalWeight =  weight / rankings.length;
          const serialized = serializeList(ranking);

          if (this.ballotsRanked[serialized]) {
            this.ballotsRanked[serialized].weight += proportionalWeight;
          } else {
            this.ballotsRanked[serialized] = {
              weight: proportionalWeight,
              ballot: ranking,
            };
          }
        }
      }
    });

    /* 4 ===CACHE=== */
    const serializedCandidates = serializeList(this.candidates);
    this._cache[serializedCandidates] = new ElectionCache(this, this.candidates);
  };

  getCache(list: string[]) {
    const serialized = serializeList(list);
    if (!this._cache[serialized]) {
      this._cache[serialized] = new ElectionCache(this, list);
    }
    return this._cache[serialized];
  };

  fptp(candidates = this.candidates): ResultSimple {
    const cache = this.getCache(candidates);
    return cache.firstVotes;
  };

  veto(candidates = this.candidates): ResultSimple {
    const cache = this.getCache(candidates);
    return cache.lastVotes;
  };

  signed(candidates = this.candidates): ResultDetailed {
    const signedVotes = candidates.reduce((a, c) => {
      a[c] = { positive: 0, negative: 0, score: 0 };
      return a;
    }, {} as ResultDetailed );

    Object.values(this.ballotsScored).forEach(
      ({ ballot, weight, highestScore, lowestScore }) => {
        const lovelist = candidates.filter(c => ballot[c] === highestScore);
        const hatelist = candidates.filter(c => ballot[c] === lowestScore);

        const distHigh = 1 - highestScore;

        if (distHigh === lowestScore) {
          const proportionalWeight = weight / (lovelist.length + hatelist.length);
          lovelist.forEach(c => {
            signedVotes[c].positive += proportionalWeight;
            signedVotes[c].score += proportionalWeight;
          });
          hatelist.forEach(c => {
            signedVotes[c].negative -= proportionalWeight;
            signedVotes[c].score -= proportionalWeight;
          });
        } else if (distHigh < lowestScore) {
          const proportionalWeight = weight / lovelist.length;
          lovelist.forEach(c => {
            signedVotes[c].positive += proportionalWeight;
            signedVotes[c].score += proportionalWeight;
          });
        } else {
          const proportionalWeight = weight / hatelist.length;
          hatelist.forEach(c => {
            signedVotes[c].negative -= proportionalWeight;
            signedVotes[c].score -= proportionalWeight;
          });
        }
      }
    );

    return signedVotes;
  };

  vfa(candidates = this.candidates): ResultDetailed {
    const cache = this.getCache(candidates);

    const firstVotes = cache.firstVotes;
    const lastVotes = cache.lastVotes;

    const vfaResults = this.candidates.reduce((a, c) => {
      const positive = firstVotes[c];
      const negative = lastVotes[c];
      a[c] = {
        positive,
        negative,
        score: positive + negative,
      };
      return a;
    }, {} as ResultDetailed);

    return vfaResults;
  };

  irv(candidates = this.candidates): ResultSimple[] {
    const rounds: ResultSimple[] = [];
    const majority = this.totalVoters / 2;

    let cands = [...candidates];
    let isOver = false;
    while (!isOver) {
      const cache = this.getCache(cands);
      const firstVotes = cache.firstVotes;
      const bestScore = cache.firstVotesHighest;

      if (bestScore > majority) isOver = true;
      else if (cands.every(c => firstVotes[c] === bestScore)) isOver = true;
      else {
        const worstScore = cache.firstVotesLowest;
        cands = cands.filter(c => firstVotes[c] > worstScore);
        if (!cands.length) break;
      }

      rounds.push(candidates.reduce((a, c) => ({
        ...a, [c]: firstVotes[c] || 0
      }), {}));
      if (rounds.length > candidates.length) break;
    }

    return rounds;
  };

  coombs(candidates = this.candidates): ResultDetailed[] {
    const rounds: ResultDetailed[] = [];
    const majority = this.totalVoters / 2;

    let cands = [...candidates];
    let isOver = false;
    while (!isOver) {
      const cache = this.getCache(cands);
      const firstVotes = cache.firstVotes;
      const lastVotes = cache.lastVotes;
      const bestScore = cache.firstVotesHighest;

      const someScore = lastVotes[cands[0]];
      if (bestScore > majority) isOver = true;
      else if (cands.every(c => lastVotes[c] === someScore)) isOver = true;
      else {
        const worstScore = cache.lastVotesLowest;
        cands = cands.filter(c => lastVotes[c] > worstScore);
        if (!cands.length) break;
      }

      rounds.push(candidates.reduce((a, c) => {
        return {
          ...a,
          [c]: {
            score: firstVotes[c] || 0,
            negative: lastVotes[c] || 0,
          }
        };
      }, {} as ResultDetailed));
      if (rounds.length > candidates.length) break;
    }

    return rounds;
  };

  fab_irv(candidates = this.candidates): ResultDetailed[] {
    const rounds: ResultDetailed[] = [];
    const majority = this.totalVoters / 2;

    let cands = [...candidates];
    let isOver = false;
    while (!isOver) {
      const cache = this.getCache(cands);
      const firstVotes = cache.firstVotes;
      const lastVotes = cache.lastVotes;
      const combinedVotes = cache.combinedVotes;
      const bestScore = cache.firstVotesHighest;

      const someScore = combinedVotes[cands[0]];
      if (bestScore > majority) isOver = true;
      else if (cands.every(c => combinedVotes[c] === someScore)) isOver = true;
      else {
        const worstScore = cache.combinedVotesLowest;
        cands = cands.filter(c => combinedVotes[c] > worstScore);
        if (!cands.length) break;
      }

      rounds.push(candidates.reduce((a, c) => ({
        ...a, [c]: {
          combined: combinedVotes[c] || 0,
          negative: lastVotes[c] || 0,
          score: firstVotes[c] || 0,
        }
      }), {} as ResultDetailed));
      if (rounds.length > candidates.length) break;
    }

    return rounds;
  };
};

export default SuperElection;
export type { ResultSimple, ResultDetailed };
