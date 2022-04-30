import ElectionCache from './ElectionCache';
import { convertSimpleToDetailed, getWinnersDetailed, getWinnersSimple, parseScoredBallot, serializeList, serializeScoredBallot } from './helpers';

type ResultSimple = {
  [candidate: string]: number;
};

type ResultDetailed = {
  [candidate: string]: {
    score: number;
    [key: string]: any;
  };
};

type ResultFull = {
  winners: string[];
  result: ResultDetailed[];
  thresholds?: number[];
};

class SuperElection {
  _cache: { [key: string]: ElectionCache} = {};
  candidates: string[];
  totalVoters: number;
  ballotsScored: {
    [key: ReturnType<typeof serializeScoredBallot>]: {
      weight: number;
      ballot: { [key: string]: number };
      proportional: { [key: string]: number };
      approval: { [key: string]: number };
      approvalProportional: { [key: string]: number };
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
    /* 
    Assumptions:
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
        const [
          rankings, highestScore, lowestScore, 
          proportional, approval, approvalProportional
        ] = parseScoredBallot(roundedBallot);

        this.ballotsScored[serialized] = {
          weight: weights[i],
          ballot: roundedBallot,
          proportional,
          approval,
          approvalProportional,
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
    // if cache doesn't exist, create it first
    const serialized = serializeList(list);
    if (!this._cache[serialized]) {
      this._cache[serialized] = new ElectionCache(this, list);
    }
    return this._cache[serialized];
  };

  useMethod(
    method: keyof typeof SuperElection.prototype,
    candidates = this.candidates
  ): ResultFull | null {
    // Ideally this "pseudo-accessor" function shouldn't exist, but it's a
    // stopgap measure because not all the method have yet been restructured
    // to return the winners list. This method calculates the winners for
    // any methods that don't have winners already
    //
    // TODO: Deprecate this.
    if (this[method] instanceof Function) {
      const cache = this.getCache(candidates);
      if (cache.results[method]) return cache.results[method];

      const result = (this[method] as Function)();

      if (result?.winners) {
        // if ResultFull 
        cache.results[method] = result as ResultFull;
      } else {
        const final = Array.isArray(result) ? result[result.length - 1] : result;

        if (typeof Object.values(final)[0] === 'number') {
          // if ResultSimple | ResultSimple[]
          cache.results[method] = {
            winners: getWinnersSimple(final),
            result: Array.isArray(result)
              ? result.map(round => convertSimpleToDetailed(round))
              : [convertSimpleToDetailed(result)]
            ,
          };
        } else {
          // if ResultDetailed | ResultDetailed[]
          cache.results[method] = {
            winners: getWinnersDetailed(final),
            result: Array.isArray(result) ? result : [result],
          };
        }
      }

      return cache.results[method];
    }

    return null;
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
    // const cache = this.getCache(candidates);
    // if (cache.results.irv) return cache.results.irv;
    
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
  contingency(candidates = this.candidates): ResultSimple[] {
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
  supplementary(candidates = this.candidates, n = 2): ResultSimple[] {
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
  sri_lanka(candidates = this.candidates): ResultSimple[] {
    return this.supplementary(candidates, 3);
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

  // Eurovision
  eurovision(): ResultSimple {
    const eurovisionResults = Object.values(this.ballotsRanked)
      .reduce((a, { ballot, weight }) => {
        a[ballot[0]] = ~~a[ballot[0]] + (12 * weight);
        a[ballot[1]] = ~~a[ballot[1]] + (10 * weight);
        if (ballot[2]) a[ballot[2]] = ~~a[ballot[2]] + (8 * weight);

        if (ballot[2]) for (let i = 2; i < Math.min(ballot.length, 10); i++) {
          a[ballot[i]] = ~~a[ballot[i]] + ((10 - i) * weight);
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

  // Binary Positional
  binary_positional(): ResultSimple {
    const binaryPositionalResults = Object.values(this.ballotsRanked)
      .reduce((a, { ballot, weight }) => {
        for (let i = 0; i < ballot.length; i++) {
          a[ballot[i]] = ~~a[ballot[i]] + (1 / Math.pow(2, i)) * weight;
        }

        return a;
      }, {} as ResultSimple)

    return binaryPositionalResults;
  };

  // Approval
  approval(candidates = this.candidates): ResultSimple {    
    const approvalResults = Object.values(this.ballotsScored).reduce((a, { ballot, weight }) => {
      for (let candidate of candidates) {
        // TODO: This type of list is reused in many other methods and should
        // be abstracted and cached. Ideally with the flexibility to ability to
        // specify I (integer between 0 and D-1) and D (integer greater than 2) 
        // where D is the number of classes you divide the scores into and I
        // is the index of the class you want to count. 
        //
        // For example, in this implementation of Approval, we have D=3 and I=0
        // because we are dividing the scores into 3 classes: (0-0.333), 
        // (0.333-0.666), and (0.666-1). and we are taking all the scores at the top
        //
        // Record<number, Record<number, Set<string>>>
        if (ballot[candidate] > (2/3)) a[candidate] = ~~a[candidate] + weight;
      }

      return a;
    }, {} as ResultSimple);

    return approvalResults;
  };

  // Disapproval
  disapproval(candidates = this.candidates): ResultSimple {
    const disapprovalResults = Object.values(this.ballotsScored).reduce((a, { ballot, weight }) => {
      for (let candidate of candidates) {
        if (ballot[candidate] < (1/3)) a[candidate] = ~~a[candidate] - weight;
      }

      return a;
    }, {} as ResultSimple);

    return disapprovalResults;
  };

  // Combined Approval
  cav(candidates = this.candidates): ResultDetailed {
    const initialShape = candidates.reduce((a, c) => ({ ...a, [c]: { score: 0, positive: 0, negative: 0 } }), {});
    const combinedApprovalResults = Object.values(this.ballotsScored).reduce((a, { ballot, weight }) => {
      for (let candidate of candidates) {
        if (ballot[candidate] > (2/3)) {
          a[candidate].score += weight;
          a[candidate].positive += weight;
        } else if (ballot[candidate] < (1/3)) {
          a[candidate].score -= weight;
          a[candidate].negative -= weight;
        }
      }

      return a;
    }, initialShape as ResultDetailed);

    return combinedApprovalResults;
  };

  // Score
  score(candidates = this.candidates, maxScore = 5): ResultSimple {
    const initialShape = candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});
    const scoreResults = Object.values(this.ballotsScored).reduce((a, { ballot, weight }) => {
      for (let candidate of candidates) {
        const score = Math.round(ballot[candidate] * maxScore);
        a[candidate] += score * weight;
      }

      return a;
    }, initialShape as ResultSimple);

    return scoreResults;
  };

  // Range
  range(candidates = this.candidates): ResultSimple {
    const initialShape = candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});
    const rangeResults = Object.values(this.ballotsScored).reduce((a, { ballot, weight }) => {
      for (let candidate of candidates) {
        a[candidate] += ballot[candidate] * weight;
      }

      return a;
    }, initialShape as ResultSimple);

    return rangeResults;
  };

  // Copeland
  copeland(
    candidates = this.candidates,
    wWeight = 1, tWeight = 0.5, lWeight = 0
  ): ResultDetailed {
    const cache = this.getCache(candidates);

    const prefMatrix = cache.pairwisePreferenceMatrix;
    
    const copelandResults = candidates.reduce((a, c1) => {
      a[c1] = { score: 0, wins: 0, ties: 0, losses: 0 };
      const prefs = prefMatrix[c1];

      Object.entries(prefs).forEach(([c2, c1Score]) => {
        if (c1 !== c2) {
          const c2Score = prefMatrix[c2][c1];
  
          if (c1Score > c2Score) {
            a[c1].wins++;
            a[c1].score += wWeight;
          } else if (c1Score < c2Score) {
            a[c1].losses++;
            a[c1].score -= lWeight;
          } else {
            a[c1].ties++;
            a[c1].score += tWeight;
          }
        }
      });

      return a;
    }, {} as ResultDetailed);

    return copelandResults;
  };

  // Lull
  lull(candidates = this.candidates): ResultDetailed {
    return this.copeland(candidates, 1, 1, 0);
  };

  // Cumulative
  cumulative(points = 10): ResultSimple {
    // Assumption: custom quota method is used
    const cumulativeResult = Object.values(this.ballotsScored).reduce((a, { approvalProportional: ballot, weight, rankings }) => {
      const rankingWeight = weight / rankings.length;

      for (let ranking of rankings) {
        let allotment = points;
        for (let candidate of ranking) {
          const toGive = Math.min(allotment, Math.ceil(ballot[candidate] * points));
          a[candidate] = ~~a[candidate] + (toGive * rankingWeight);

          allotment -= toGive;
          if (!allotment) break;
        }
      }

      return a;
    }, {} as ResultSimple);

    return cumulativeResult;
  };

  // Equal & Even
  equal_even(candidates = this.candidates): ResultSimple {
    // https://en.wikipedia.org/wiki/Cumulative_voting#Voting
    // takes list of approved candidates
    // equally splits budget amongst them
    const equalEvenResults = Object.values(this.ballotsScored).reduce((a, { ballot, weight }) => {
      const approved = new Array<string>();
      for (let candidate of candidates) {
        if (ballot[candidate] > (2/3)) approved.push(candidate);
      }

      approved.forEach(c => a[c] = ~~a[c] + (weight / approved.length));

      return a;
    }, {} as ResultSimple);

    return equalEvenResults;
  };

  // Fractional
  fractional(candidates = this.candidates): ResultSimple {
    const initialShape = candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});
    const fractionalResult = Object.values(this.ballotsScored).reduce((a, { approvalProportional: ballot, weight }) => {
      for (const candidate of candidates) {
        a[candidate] += (ballot[candidate] || 0) * weight;
      }

      return a;
    }, initialShape as ResultSimple);

    return fractionalResult;
  };

  // Quadratic
  quadratic(candidates = this.candidates): ResultSimple {
    const initialShape = candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});
    const quadraticResult = Object.values(this.ballotsScored).reduce((a, { approvalProportional: ballot, weight }) => {
      for (const c of candidates) a[c] += Math.sqrt(ballot[c]) * weight;
      return a;
    }, initialShape as ResultSimple);

    return quadraticResult;
  };
};

export default SuperElection;
export type { ResultSimple, ResultDetailed, ResultFull };
