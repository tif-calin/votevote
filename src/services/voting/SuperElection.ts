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

  // First Past the Post
  fptp(candidates = this.candidates): ResultSimple {
    const cache = this.getCache(candidates);
    return cache.firstVotes;
  };

  // Anti-Plurality
  veto(candidates = this.candidates): ResultSimple {
    const cache = this.getCache(candidates);
    return cache.lastVotes;
  };

  // Boehm Signed
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

  // Vote For and Against
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

  // Instant Runoff Voting
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

  // Coombs IRV
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

  // Front and Back IRV
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

  // Contingency
  cont(candidates = this.candidates): ResultSimple[] {
    const majority = this.totalVoters / 2;

    const round1Cache = this.getCache(candidates);
    const bestScore = round1Cache.firstVotesHighest;

    if (bestScore > majority) return [round1Cache.firstVotes];
    else {
      const top2 = round1Cache.getFirstVotesTopN(2);
      const round2Cache = this.getCache(top2);
      const round2Results = round2Cache.firstVotes;
      return [
        round1Cache.firstVotes,
        candidates.reduce((a, c) => ({
          ...a, [c]: round2Results[c] || 0
        }), {}),
      ]
    }
  };

  // Supplementary
  supp(candidates = this.candidates, n = 2): ResultSimple[] {
    const majority = this.totalVoters / 2;

    const cache = this.getCache(candidates);
    const firstVotes = cache.firstVotes;
    const bestScore = cache.firstVotesHighest;

    if (bestScore > majority) return [firstVotes];
    else {
      const top2 = new Set(cache.getFirstVotesTopN(2));
      const round2 = Object.values(this.ballotsRanked)
        .reduce((acc, { ballot, weight }) => {
          const choice = ballot.slice(0, n).find(c => top2.has(c));
          if (choice) acc[choice] = ~~acc[choice] + weight;
          return acc;
        }, {} as ResultSimple);

      return [
        firstVotes,
        candidates.reduce((a, c) => ({
          ...a, [c]: round2[c] || 0
        }), {}),
      ];
    }
  };

  // Sri Lankan Contingency
  sl_cont(candidates = this.candidates): ResultSimple[] {
    return this.supp(candidates, 3);
  };

  // Borda Count
  borda(candidates = this.candidates): ResultSimple {
    const bordaResults = Object.values(this.ballotsRanked)
      .reduce((a, { ballot, weight }) => {
        for (let i = 0; i < ballot.length - 1; i++) {
          a[ballot[i]] = ~~a[ballot[i]] + (candidates.length - i - 1) * weight;
        }
        
        return a;
    }, {} as ResultSimple);

    return bordaResults;
  };

  // Nauru
  nauru(): ResultSimple {
    const nauruResults = Object.values(this.ballotsRanked)
      .reduce((a, { ballot, weight }) => {
        for (let i = 0; i < ballot.length - 1; i++) {
          a[ballot[i]] = ~~a[ballot[i]] + (1 / (i + 1)) * weight;
        }
        
        return a;
    }, {} as ResultSimple);

    return nauruResults;
  };

  eurovision(): ResultSimple {
    const eurovisionResults = Object.values(this.ballotsRanked)
      .reduce((a, { ballot, weight }) => {
        a[ballot[0]] = ~~a[ballot[0]] + (12 * weight);
        a[ballot[1]] = ~~a[ballot[1]] + (10 * weight);
        if (ballot[2]) a[ballot[2]] = ~~a[ballot[2]] + (8 * weight);

        if (ballot[3]) for (let i = 3; i < Math.min(ballot.length, 9); i++) {
          a[ballot[i]] = ~~a[ballot[i]] + weight;
        }

        return a;
      }, {} as ResultSimple)
    ;

    return eurovisionResults;
  };

  // Dabagh's Vote and a Half
  dabagh(): ResultSimple {
    const dabaghResults = Object.values(this.ballotsRanked)
      .reduce((a, { ballot, weight }) => {
        a[ballot[0]] = ~~a[ballot[0]] + weight;
        a[ballot[1]] = ~~a[ballot[1]] + weight / 2;
        return a;
      }, {} as ResultSimple)
    ;

    return dabaghResults;
  };
};

export default SuperElection;
export type { ResultSimple, ResultDetailed };
