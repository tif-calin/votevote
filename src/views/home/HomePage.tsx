import React from 'react';
import styled from 'styled-components';
import xkcd from '../../data/xkcd';
import useElection from '../../hooks/useElection';
import { votersToBallots } from '../../services/color/colorDistance';
import InputLeft, { MemoizedInputLeft } from './InputLeft';
import OutputRight from './OutputRight';

const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding);
  align-items: stretch;

  box-shadow: var(--shadow-inset-medium), inset 0 0 2px hsl(var(--shadow-color));
  filter: lightness(0.5);
  backdrop-filter: invert(0.05);

  & *.island {
    border-radius: 0.25rem;
    background-color: var(--color-white);
    box-shadow: var(--shadow-elevation-medium), 0 0 3px hsl(var(--shadow-color));
  }
`;

interface Props {};

const ballotMaker = (voters: string[], candidates: string[]) => votersToBallots(voters, candidates, xkcd);

const HomePage: React.FC<Props> = () => {
  const { elect, electionOutcomes: data } = useElection();
  console.log(data);

  const handleElect = React.useCallback((c, v) => elect(c, v, ballotMaker), [elect]);

  return (
    <Page>
      <MemoizedInputLeft
        elect={handleElect}
      />
      <OutputRight 
        data={data}
      />
    </Page>
  );
};

export default HomePage;
