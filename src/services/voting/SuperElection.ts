
const serializeBallot = (ballot: { [key: string]: number }) => {
  return Object.entries(ballot)
    .map(([k, v]) => `${k}::${v}`)
    .join(',,')
  ;
};

const serializeList = (list: string[]) => list.join(',,');

const getPermutations = (arr: string[]): string[][] => {
  if (arr.length <= 1) return [arr];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    const rest = arr.slice(0, i).concat(arr.slice(i + 1));
    const restPerms = getPermutations(rest);

    for (let perm of restPerms) {
      result.push([first].concat(perm));
    }
  }

  return result;
};

/**
 * Convert a scored ballot to its ranked counterpart(s). Returns an array of all possible permutations.
 * @param {Object.<string, number>} scoredBallot - each candidate is given a score in the range of [0, 1]
 * @returns {[Array.<Array.<string>>, number, number]} [an array of equivalent ranked ballots, the highest score, the lowest score]
 * 
 * @example
 * rankedBallots({ 
 *  red: 0.6, 
 *  blue: 0.6, 
 *  green: 0.33, 
 *  cyan: 0.02 
 * });
 * 
 * [
 *   ['red', 'blue', 'green', 'cyan'],
 *   ['blue', 'red', 'green', 'cyan'],
 * ]
 */
const scoredBallotToRankedBallots = (scoredBallot: { [candidate: string]: number }): [string[][], number, number] => {
  // organize the candidates by their scores
  const byScore = Object.keys(scoredBallot).reduce((acc, candidate) => {
    const score = scoredBallot[candidate];

    if (acc[score]) acc[score].push(candidate);
    else acc[score] = [candidate];

    return acc;
  }, {} as { [key: number]: string[] });

  // get list of all scores and sort it
  const scores = Object.keys(byScore).map(s => Number(s)).sort((a, b) => b - a);
  const highestScore = scores[0];
  const lowestScore = scores[scores.length - 1];

  // make an array of arrays with each subarray containing all candidates with that score
  const bigRank = scores.map((score) => byScore[score]);

  // get all possible permutations
  let ballots: string[][] = [[]];
  for (let rank of bigRank) {
    const permutes = getPermutations(rank);
    const newBallots: string[][] = [];

    for (let p of permutes) {
      for (let i = 0; i < ballots.length; i++) {
        const arr = ballots[i];

        newBallots.push([...arr, ...p]);
      }
    }

    ballots = newBallots;
  };

  return [ballots, highestScore, lowestScore];
};

type Cache = {
  [key: string]: {
    firstVotes?: { [key: string]: number };
    firstVotesBest?: number;
    firstVotesWorst?: number;
    lastVotes?: { [key: string]: number };
    lastVotesBest?: number;
    lastVotesWorst?: number;
  }
};

type Ballots = {
  [key: ReturnType<typeof serializeBallot>]: {
    _weight_: number;
    base: { [key: string]: number };
    highestScore: number;
    lowestScore: number;
    ranked: string[][];
  };
};

type RankedBallots = { [serializedArray: string]: { weight: number, ranked: string[] } };

class SuperElection {
  _cache_: Cache = {};
  ballots: Ballots = {};
  rankedBallots: RankedBallots = {};
  candidates: string[];

  constructor(candidates: string[], ballots: { [key: string]: number }[], weights: number[] = []) {
    this.candidates = candidates.sort();
    
    ballots.forEach((b, i) => {
      // round to 3 decimal places:
      Object.keys(b).forEach(c => b[c] = Math.round(b[c] * 1000) / 1000 );

      // serialize ballot in case of indentical ballots:
      const sb = serializeBallot(b);

      // if ballot already exists, add weight, otherwise create new entry
      if (this.ballots[sb]) {
        this.ballots[sb]._weight_ = ~~this.ballots[sb]._weight_ + weights[i];
      } else {
        this.ballots[sb] = { _weight_: weights[i], base: b, ranked: [], highestScore: 0, lowestScore: 0 };
      }

      // get ranked versions of ballots as well as the highest and lowest scores
      const [ rankedBallots, hs, ls ] = scoredBallotToRankedBallots(b);
      this.ballots[sb].ranked = rankedBallots;
      this.ballots[sb].highestScore = hs;
      this.ballots[sb].lowestScore = ls;
    });

    const allCands = serializeList(this.candidates);
    if (!this._cache_[allCands]) this._cache_[allCands] = {};

    this.updateRankedBallots();
  }

  updateRankedBallots() {
    Object.values(this.ballots).forEach(({ _weight_, ranked }) => {
      if (ranked?.length) {
        for (let ranking of ranked) {
          const sr = serializeList(ranking);
  
          if (this.rankedBallots[sr]) this.rankedBallots[sr].weight += (_weight_ / ranked.length);
          else this.rankedBallots[sr] = { weight: (_weight_ / ranked.length), ranked: ranking };
        }
      }
    });
  }

  getFirstVotesWorst(candidates: string[]) {
    const serializedCandidateSet = serializeList(candidates);
    if (!this._cache_[serializedCandidateSet]) {
      this._cache_[serializedCandidateSet] = {
        firstVotes: this.fptp(candidates)
      };
    }

    const cache = this._cache_[serializedCandidateSet];
    if (cache.firstVotesWorst) return cache.firstVotesWorst;
    else {
      const firstVotes = this.fptp(candidates) as { [key: string]: number } ;
      const firstVotesWorst = Math.min(...Object.values(firstVotes));
      cache.firstVotesWorst = firstVotesWorst;
      return firstVotesWorst;
    }
  }

  fptp(candidates = this.candidates): { [key: string]: number } | undefined {
    const ser = serializeList(candidates);
    if (!this._cache_[ser]) this._cache_[ser] = {};
    const allCandsCache = this._cache_[serializeList(candidates)];

    if (allCandsCache?.firstVotes) {
      const firstVotes = allCandsCache.firstVotes;
      return firstVotes;
    } else {
      const firstVotes: { [key: string]: number } = candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});

      Object.values(this.rankedBallots).forEach(({ weight, ranked }) => {
        const firstChoice = ranked.find(c => candidates.includes(c));
        if (firstChoice)
          firstVotes[firstChoice] = ~~firstVotes[firstChoice] + weight
        ;
      });

      allCandsCache.firstVotes = firstVotes;
      return this.fptp(candidates);
    }
  }

  veto(): { [key: string]: number } | undefined {
    const allCandsCache = this._cache_[serializeList(this.candidates)];

    if (allCandsCache?.lastVotes) {
      const lastVotes = allCandsCache.lastVotes;
      return lastVotes;
    } else {
      const lastVotes: { [key: string]: number } = this.candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});;

      Object.values(this.rankedBallots).forEach(({ weight, ranked }) => {
        if (ranked.at(-1)) lastVotes[ranked.at(-1) as string] = ~~lastVotes[ranked.at(-1) as string] - weight;
      });

      allCandsCache.lastVotes = lastVotes;
      return this.veto();
    }
  }

  signed(): { [key: string]: number } | undefined {
    const signedScores: { [key: string]: number } = this.candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});

    Object.values(this.ballots).forEach(({ base, highestScore, lowestScore, _weight_: weight }) => {
      const hsDist = Math.abs(0.5 - highestScore);
      const lsDist = Math.abs(0.5 - lowestScore);

      let winners: string[] = [];
      let losers: string[] = [];
      if (hsDist === lsDist) {
        winners = this.candidates.filter(c => base[c] === highestScore);
        losers = this.candidates.filter(c => base[c] === lowestScore);
      } else if (hsDist > lsDist) {
        winners = this.candidates.filter(c => base[c] === highestScore);
      } else {
        losers = this.candidates.filter(c => base[c] === lowestScore);
      }

      winners.forEach(w => signedScores[w] += (weight / (winners.length + losers.length)));
      losers.forEach(l => signedScores[l] -= (weight / (losers.length + winners.length)));
    });

    return signedScores;
  }

  vfa(): { [key: string]: number } | undefined {
    const allCandsCache = this._cache_[serializeList(this.candidates)];

    if (!allCandsCache?.lastVotes) this.veto();
    if (!allCandsCache?.firstVotes) this.fptp();

    const vfaScores = this.candidates.reduce((a, c) => {
      const fv = allCandsCache?.firstVotes?.[c] || 0;
      const lv = allCandsCache?.lastVotes?.[c] || 0;
      return { ...a, [c]: fv + lv };
    }, {});

    return vfaScores;
  }
  
  irv(candidates = this.candidates): { [key: string]: number }[] | undefined {
    const rounds: { [key: string]: number }[] = [];

    const majority = Object
      .values(this.ballots)
      .reduce((a, { _weight_ }) => a + _weight_, 0) / 2
    ;

    let cands = [...candidates];
    const dropped = new Set<string>();

    let isOver = false;
    while (!isOver) {
      const firstVotes = this.fptp(cands) as { [key: string]: number };
      const goodScore = Math.max(...Object.values(firstVotes));

      if (goodScore > majority) {
        isOver = true;
      } else {
        const badScore = this.getFirstVotesWorst(cands);
  
        cands = cands.filter(c => {
          if (firstVotes[c] <= badScore) {
            dropped.add(c);
            return false;
          } else return true;
        });
      }

      rounds.push(candidates.reduce((a, c) => ({
        ...a, [c]: firstVotes[c] || 0
      }), {}));
      if (rounds.length > candidates.length) break;
    }

    return rounds;
  }
};

export default SuperElection;
