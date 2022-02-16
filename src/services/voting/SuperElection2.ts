import ElectionCache from './ElectionCache';
import { parseScoredBallot, serializeList, serializeScoredBallot } from './helpers';

type ResultSimple = {
  [candidate: string]: number;
};

// type ResultDetailed = {
//   [candidate: string]: {
//     score: number;
//     [key: string]: any;
//   };
// };

class SuperElection {
  _cache: { [key: string]: ElectionCache} = {};
  candidates: string[];
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
    /* 1 ===CANDIDATES=== */
    this.candidates = [...candidates].sort();

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
    this._cache[serializedCandidates] = new ElectionCache(this);
  };

  fptp(candidates = this.candidates): ResultSimple {
    const cache = this._cache[serializeList(candidates)];
    return cache.firstVotes;
  }
};

export default SuperElection;
