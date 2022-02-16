import SuperElection from './SuperElection2';

class ElectionCache {
  election: SuperElection;

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

  constructor(election: SuperElection) {
    this.election = election;
  }

  get firstVotes(): { [key: string]: number } {
    if (this._firstVotes) return this._firstVotes;
    return {};
  }
}

export default ElectionCache;
