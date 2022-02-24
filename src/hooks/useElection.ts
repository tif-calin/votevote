import React from 'react';
import { convertDetailedToSimple } from '../services/voting/helpers';
import SuperElection, { ResultFull } from '../services/voting/SuperElection';
import info from '../services/voting/info';

type VoterBallots = {
  [voter: string]: {
    weight: number;
    ballot: { [candidate: string]: number };
  };
};

const useElection = () => {
  const [election, setElection] = React.useState<SuperElection | null>(null);
  const [ballots, setBallots] = React.useState<VoterBallots>({});

  const elect = React.useCallback((
    candidates: string[], 
    voters: { [name: string]: number }, 
    ballotMaker: (voters: string[], candidates: string[]) => { [candidate: string]: number }[] 
  ) => {
    if (candidates?.length) {
      const weights: number[] = Object.values(voters);
      const ballots = ballotMaker(Object.keys(voters), candidates);
      const newElection = new SuperElection(candidates, ballots, weights);
      setElection(newElection);
      setBallots(Object.keys(voters).reduce((acc, voter, i) => ({
        ...acc, [voter]: { 
          weight: voters[voter], 
          ballot: ballots[i]
        }
      }), {}));
    }
  }, []);

  const electionOutcomes = React.useMemo(() => {
    if (election) {
      return {
        irv: election.irv(),
        coombs: election.coombs().map(convertDetailedToSimple),
        fab_irv: election.fab_irv().map(convertDetailedToSimple),
        contingency: election.contingency(),
        supplementary: election.supplementary(),
        sri_lanka: election.sri_lanka(),
      }
    } else return {};
  }, [election]);

  const electionOutcomesFull = React.useMemo(() => {
    if (election) {
      const methods = Object.keys(info);
  
      return methods.reduce((acc, key) => {
        const result = election.useMethod(key as keyof SuperElection);
        if (result) acc[key] = result;
  
        return acc;
      }, {} as { [key: string]: ResultFull });
    }
  }, [election]);

  return {
    election,
    elect,
    ballots,
    electionOutcomes, electionOutcomesFull
  };
};

export default useElection;
export type { VoterBallots };
