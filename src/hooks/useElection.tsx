import React from 'react';
import SuperElection from '../services/voting/SuperElection';

const useElection = () => {
  const [election, setElection] = React.useState<SuperElection | null>(null);

  const elect = (
    candidates: string[], 
    voters: { [name: string]: number }, 
    ballotMaker: (voters: string[], candidates: string[]) => { [candidate: string]: number }[] 
  ) => {
    const weights: number[] = [];
    const ballots = ballotMaker(Object.keys(voters), candidates);
    const newElection = new SuperElection(candidates, ballots, weights);
    setElection(newElection);
    console.log(newElection);
  };

  return {
    election,
    elect
  };
};

export default useElection;
