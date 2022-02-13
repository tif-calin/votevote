
class CandCache {
  firstVotes?: { [key: string]: number };
  firstVotesHighest?: number;
  firstVotesWinners?: string[];
  firstVotesLowest?: number;
  firstVotesLosers?: string[];

  lastVotes?: { [key: string]: number };
  lastVotesHighest?: number;
  lastVotesWinners?: string[];
  lastVotesLowest?: number;
  lastVotesLosers?: string[];
}

export default CandCache;
