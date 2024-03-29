import React from 'react';
import styled from 'styled-components';
import xkcd from '../../data/xkcd';
import useElection from '../../hooks/useElection';
import { votersToBallots } from '../../services/color/colorDistance';
import Infobox from './Infobox';
import { MemoizedInputLeft } from './left/InputLeft';
import StatsBox from './left/StatsBox';
import { MemoizedOutputRight } from './right/OutputRight';

const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding);
  align-items: stretch;
  position: relative;

  box-shadow: var(--shadow-inset-medium), inset 0 0 2px hsl(var(--shadow-color));
  background-color: var(--color-backwhite);
  // @supports (backdrop-filter: invert(0.05)) {
  //   background-color: unset;
  //   backdrop-filter: invert(0.05);
  // }

  & *.island {
    border-radius: 0.25rem;
    background-color: var(--color-white);
    box-shadow: var(--shadow-elevation-medium), 0 0 3px hsl(var(--shadow-color));
  }
`;

const ballotMaker = (voters: string[], candidates: string[]) => votersToBallots(voters, candidates, xkcd);

const HomePage = () => {
  const { 
    election, 
    elect, 
    ballots, 
    electionOutcomes: data, 
    electionOutcomesFull: dataFull 
  } = useElection();

  const handleElect = React.useCallback(
    (c, v) => elect(c, v, ballotMaker), [elect]
  );

  return (
    <Page>
      <Infobox />
      <MemoizedInputLeft
        elect={handleElect}
        ballots={ballots}
        auto={(election?.candidates?.length || 0) < 20}
      >
        <StatsBox data={dataFull} election={election || undefined} />
      </MemoizedInputLeft>
      <MemoizedOutputRight 
        data={data}
        dataFull={dataFull || {}}
      />
    </Page>
  );
};

export default HomePage;
