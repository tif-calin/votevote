import React from 'react';
import { convertDetailedToSimple } from '../services/voting/helpers';
import SuperElection, { ResultFull } from '../services/voting/SuperElection';

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
        fptp: election.fptp(),
        veto: election.veto(),
        signed: convertDetailedToSimple(election.signed()),
        vfa: convertDetailedToSimple(election.vfa()),
        irv: election.irv(),
        coombs: election.coombs().map(convertDetailedToSimple),
        fab_irv: election.fab_irv().map(convertDetailedToSimple),
        contingency: election.contingency(),
        supplementary: election.supplementary(),
        sl_contingency: election.sl_contingency(),
        borda: election.borda(),
        nauru: election.nauru(),
        eurovision: election.eurovision(),
        dabagh: election.dabagh(),
        approval: election.approval(),
        combined_approval: election.combined_approval(),
      }
    } else return {};
  }, [election]);

  const electionOutcomesFull = React.useMemo(() => {
    if (election) {
      const methods = [
        'fptp', 'veto', 'signed', 'vfa',
        'irv', 'coombs', 'fab_irv',
        'contingency', 'supplementary', 'sl_contingency',
        'borda', 'nauru', 'eurovision', 'dabagh',
        'approval', 'combined_approval',
      ];
  
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
