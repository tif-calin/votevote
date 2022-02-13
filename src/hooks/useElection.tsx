import React from 'react';
import SuperElection from '../services/voting/SuperElection';

const useElection = () => {
  const [election, setElection] = React.useState<SuperElection | null>(null);

  const elect = React.useCallback((
    candidates: string[], 
    voters: { [name: string]: number }, 
    ballotMaker: (voters: string[], candidates: string[]) => { [candidate: string]: number }[] 
  ) => {
    const weights: number[] = Object.values(voters);
    const ballots = ballotMaker(Object.keys(voters), candidates);
    const newElection = new SuperElection(candidates, ballots, weights);
    setElection(newElection);
  }, []);

  const electionOutcomes = React.useMemo(() => {
    if (election) {
      return {
        fptp: election.fptp(),
        veto: election.veto(),
        signed: election.signed(),
        vfa: election.vfa(),
        irv: election.irv(),
      }
    } else return {};
  }, [election]);

  return {
    election,
    elect,
    electionOutcomes
  };
};

export default useElection;
