import SuperElection from './SuperElection';

class ElectionCache {
  election: typeof SuperElection;
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

  constructor(candidates: string[], election: typeof SuperElection) {
    this.election = election;
    this.candidates = candidates;
  }

  get firstVotes(): { [key: string]: number } {
    if (this._firstVotes) return this._firstVotes;
    return {};
  }
}

export default ElectionCache;
