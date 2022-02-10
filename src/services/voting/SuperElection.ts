
const serializeBallot = (ballot: { [key: string]: number }) => {
  return Object.entries(ballot)
    .map(([k, v]) => `${k}::${v}`)
    .join(',,')
  ;
};

// const deserializeBallot = (ballot: string) => {
//   return ballot
//     .split(',,')
//     .map(entry => entry.split('::'))
//   ;
// };

type Cache = {
  [key: string]: {
    firstVotes: { [key: string]: number };
  }
};

type Ballots = {
  [key: ReturnType<typeof serializeBallot>]: {
    _weight_: number;
    base: { [key: string]: number };
    ranked?: string[];
  };
};

type RankedBallots = { [serializedArray: string]: { weight: number, ranked: string[] } };

class SuperElection {
  _cache: Cache = {};
  ballots: Ballots = {};
  rankedBallots: RankedBallots = {};
  candidates: string[];

  constructor(candidates: string[], ballots: { [key: string]: number }[], weights: number[] = []) {
    this.candidates = candidates.sort();
    
    ballots.forEach((b, i) => {
      const sb = serializeBallot(b);
      if (this.ballots[sb]) {
        this.ballots[sb]._weight_ = ~~this.ballots[sb]._weight_ + weights[i];
        this.ballots[sb].base = b;
      } else {
        this.ballots[sb] = {
          _weight_: weights[i],
          base: b,
        }
      }
    });
  }

  fptp() {

  }
};

export default SuperElection;
