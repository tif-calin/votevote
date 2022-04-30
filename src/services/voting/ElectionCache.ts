import SuperElection, { ResultFull } from './SuperElection';

class ElectionCache {
  election: SuperElection;
  candidates: string[];
  results: Record<string, ResultFull> = {};

  _firstVotes?: { [key: string]: number };
  _firstVotesScores?: number[];
  _firstVotesTiers?: string[][];
  _firstVotesTopN: { [key: number]: string[] } = {};
  _firstVotesHighest?: number;
  _firstVotesWinners?: string[];
  _firstVotesLowest?: number;
  _firstVotesLosers?: string[];

  _pairwisePreferenceMatrix?: { 
    [key: string]: { [key: string]: number; } 
  };

  _lastVotes?: { [key: string]: number };
  _lastVotesHighest?: number;
  _lastVotesWinners?: string[];
  _lastVotesLowest?: number;
  _lastVotesLosers?: string[];

  _combinedVotes?: { [key: string]: number };
  _combinedVotesHighest?: number;
  _combinedVotesWinners?: string[];
  _combinedVotesLowest?: number;
  _combinedVotesLosers?: string[];

  constructor(election: SuperElection, candidates: string[]) {
    this.election = election;
    this.candidates = [...candidates];
  };

  /* firstVotes */
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

  get firstVotesScores(): number[] {
    if (this._firstVotesScores) return this._firstVotesScores;

    const firstVotes = this.firstVotes;

    const firstVotesScores = Object.values(firstVotes)
      .sort((a, b) => a - b)
    ;

    this._firstVotesScores = firstVotesScores;
    return firstVotesScores;
  };

  get firstVotesTiers(): string[][] {
    if (this._firstVotesTiers) return this._firstVotesTiers;

    const firstVotes = this.firstVotes;
    const firstVotesScores = this.firstVotesScores;

    const firstVotesTiers: string[][] = [];
    for (let i = 0; i < firstVotesScores.length; i++) {
      firstVotesTiers[i] = this.candidates.filter(
        c => firstVotes[c] === firstVotesScores[i]
      );
    }

    this._firstVotesTiers = firstVotesTiers;
    return firstVotesTiers;
  };

  getFirstVotesTopN(n: number): string[] {
    if (this._firstVotesTopN[n]) return this._firstVotesTopN[n];

    const firstVotes = this.firstVotes;
    const firstVotesScores = this.firstVotesScores;

    for (let i = 0; i < firstVotesScores.length; i++) {
      const topM: string[] = this.candidates.filter(
        c => firstVotes[c] >= firstVotesScores[i]
      );

      for (let j = 0; j < topM.length; j++) {
        this._firstVotesTopN[j + 1] = topM;
      }
    }

    return this._firstVotesTopN[n];
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

  get pairwisePreferenceMatrix(): { [key: string]: { [key: string]: number; } } {
    // NOTE: this uses ballotsRanked instead of ballotsScored so there are no ties
    // someone should prolly do something about that... 
    if (this._pairwisePreferenceMatrix) return this._pairwisePreferenceMatrix;

    const matrix = this.candidates.reduce((a, c1) => {
      a[c1] = {};
      this.candidates.forEach(c2 => {
        a[c1][c2] = 0;
      });
      return a;
    }, {} as { [key: string]: { [key: string]: number; } });

    Object.values(this.election.ballotsRanked).forEach(({ ballot, weight }) => {
      for (let i = 0; i < ballot.length - 1; i++) {
        const c1 = ballot[i];

        for (let j = i + 1; j < ballot.length; j++) {
          const c2 = ballot[j];
          matrix[c1][c2] += weight;
        }
      }
    });

    this._pairwisePreferenceMatrix = matrix;
    return matrix;
  };

  /* lastVotes */
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
  };

  get combinedVotes(): { [key: string]: number } {
    if (this._combinedVotes) return this._combinedVotes;

    const lastVotes = this.lastVotes;
    const firstVotes = this.firstVotes;

    const combinedVotes: { [key: string]: number } = this.candidates.reduce(
      (a, c) => ({ ...a, [c]: lastVotes[c] + firstVotes[c] }),
      {}
    );

    this._combinedVotes = combinedVotes;
    return combinedVotes;
  };

  get combinedVotesLowest(): number {
    if (this._combinedVotesLowest) return this._combinedVotesLowest;

    const combinedVotes = this.combinedVotes;

    const combinedVotesLowest = Math.min(...Object.values(combinedVotes));

    this._combinedVotesLowest = combinedVotesLowest;
    return combinedVotesLowest;
  };
};

export default ElectionCache;
