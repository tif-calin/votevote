
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
 * @returns {Array.<Array.<string>>} an array of equivalent ranked ballots
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
const scoredBallotToRankedBallots = (scoredBallot: { [candidate: string]: number }) => {
  // organize the candidates by their scores
  const byScore = Object.keys(scoredBallot).reduce((acc, candidate) => {
    const score = scoredBallot[candidate];

    if (acc[score]) acc[score].push(candidate);
    else acc[score] = [candidate];

    return acc;
  }, {} as { [key: number]: string[] });

  // get list of all scores and sort it
  const scores = Object.keys(byScore).map(s => Number(s)).sort((a, b) => a - b);

  // make an array of arrays with each subarray containing all candidates with that score
  const bigRank = scores.map((score) => byScore[score]).reverse();

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

  return ballots;
};

type Cache = {
  [key: string]: {
    firstVotes?: { [key: string]: number };
  }
};

type Ballots = {
  [key: ReturnType<typeof serializeBallot>]: {
    _weight_: number;
    base: { [key: string]: number };
    ranked?: string[][];
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
        this.ballots[sb] = { _weight_: weights[i], base: b, }
      }

      // get ranked versions of ballots
      const rankedBallots = scoredBallotToRankedBallots(b);
      this.ballots[sb].ranked = rankedBallots;
    });

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
    })
  }

  fptp(): { [key: string]: number } | undefined {
    const allCands = serializeList(this.candidates);
    if (!this._cache_[allCands]) this._cache_[allCands] = { };

    if (this._cache_[allCands]?.firstVotes) {
      const firstVotes = this._cache_[allCands].firstVotes;
      return firstVotes;
      // const topScore = Math.max(...Object.values(firstVotes));
      // return this.candidates.filter(c => firstVotes[c] === topScore);
    } else {
      const firstVotes: { [key: string]: number } = {};

      Object.values(this.rankedBallots).forEach(({ weight, ranked }) => {
        firstVotes[ranked[0]] = ~~firstVotes[ranked[0]] + weight;
      });

      this._cache_[allCands].firstVotes = firstVotes;
      return this.fptp();
    }
  }
};

export default SuperElection;
