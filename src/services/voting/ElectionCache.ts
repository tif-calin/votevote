import SuperElection from './SuperElection2';

class ElectionCache {
  election: SuperElection;
  candidates: string[];

  _firstVotes?: { [key: string]: number };
  _firstVotesHighest?: number;
  _firstVotesWinners?: string[];
  _firstVotesLowest?: number;
  _firstVotesLosers?: string[];

  _lastVotes?: { [key: string]: number };
  _lastVotesHighest?: number;
  _lastVotesWinners?: string[];
  _lastVotesLowest?: number;
  _lastVotesLosers?: string[];

  constructor(election: SuperElection, candidates: string[]) {
    this.election = election;
    this.candidates = [...candidates];
  };

  get firstVotes(): { [key: string]: number } {
    if (this._firstVotes) return this._firstVotes;

    const firstVotes: { [key: string]: number } =
      this.candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {})
    ;
    Object.values(this.election.ballotsRanked).forEach(({ ballot, weight }) => {
      const firstChoice = ballot.find(c => this.candidates.includes(c));
      if (firstChoice) firstVotes[firstChoice] += weight;
    });

    this._firstVotes = firstVotes;
    return firstVotes;
  };

  get firstVotesHighest(): number {
    if (this._firstVotesHighest) return this._firstVotesHighest;

    const firstVotes = this.firstVotes;

    const firstVotesHighest = Math.max(...Object.values(firstVotes));

    this._firstVotesHighest = firstVotesHighest;
    return firstVotesHighest;
  };

  get firstVotesLowest(): number {
    if (this._firstVotesLowest) return this._firstVotesLowest;

    const firstVotes = this.firstVotes;

    const firstVotesLowest = Math.min(...Object.values(firstVotes));

    this._firstVotesLowest = firstVotesLowest;
    return firstVotesLowest;
  };

  get firstVotesWinners(): string[] {
    if (this._firstVotesWinners) return this._firstVotesWinners;

    const firstVotes = this.firstVotes;
    const firstVotesHighest = this.firstVotesHighest;

    const firstVotesWinners = this.candidates.filter(
      c => firstVotes[c] >= firstVotesHighest
    );

    this._firstVotesWinners = firstVotesWinners;
    return firstVotesWinners;
  };

  get firstVotesLosers(): string[] {
    if (this._firstVotesLosers) return this._firstVotesLosers;

    const firstVotes = this.firstVotes;
    const firstVotesLowest = this.firstVotesLowest;

    const firstVotesLosers = this.candidates.filter(
      c => firstVotes[c] <= firstVotesLowest
    );

    this._firstVotesLosers = firstVotesLosers;
    return firstVotesLosers;
  };

  get lastVotes(): { [key: string]: number } {
    if (this._lastVotes) return this._lastVotes;

    const lastVotes: { [key: string]: number } =
      this.candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {})
    ;
    Object.values(this.election.ballotsRanked).forEach(({ ballot, weight }) => {
      const lastChoice = [...ballot]
        .reverse()
        .find(c => this.candidates.includes(c))
      ;
      if (lastChoice) lastVotes[lastChoice] -= weight;
    });

    this._lastVotes = lastVotes;
    return lastVotes;
  };

  get lastVotesHighest(): number {
    if (this._lastVotesHighest) return this._lastVotesHighest;

    const lastVotes = this.lastVotes;

    const lastVotesHighest = Math.max(...Object.values(lastVotes));

    this._lastVotesHighest = lastVotesHighest;
    return lastVotesHighest;
  };

  get lastVotesLowest(): number {
    if (this._lastVotesLowest) return this._lastVotesLowest;

    const lastVotes = this.lastVotes;

    const lastVotesLowest = Math.min(...Object.values(lastVotes));

    this._lastVotesLowest = lastVotesLowest;
    return lastVotesLowest;
  }
};

export default ElectionCache;
