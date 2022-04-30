import React from 'react';
import styled from 'styled-components';
import xkcd from '../../data/xkcd';
import useElection from '../../hooks/useElection';
import { votersToBallots } from '../../services/color/colorDistance';
import Infobox from './Infobox';
import { MemoizedInputLeft } from './left/InputLeft';
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

  React.useEffect(() => {
    console.debug(election);
    if (dataFull?.fptp) {
      console.debug(dataFull);
      const winSet = new Set(
        Object.values(dataFull).reduce(
          (acc, { winners }) => winners.length === 1 ? [acc, winners].flat() : acc, 
          [] as string[]
        )
      );
      console.log(winSet.size);
      // for (let method of Object.keys(dataFull)) console.debug(method, dataFull[method].winners);
    }
  }, [dataFull, election]);

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
      />
      <MemoizedOutputRight 
        data={data}
        dataFull={dataFull || {}}
      />
    </Page>
  );
};

export default HomePage;
