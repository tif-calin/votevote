import React from 'react';
import styled from 'styled-components';
import InputLeft from './InputLeft';
import OutputRight from './OutputRight';

const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding);

  box-shadow: var(--shadow-inset-medium), inset 0 0 2px hsl(var(--shadow-color));
  filter: lightness(0.5);
  backdrop-filter: invert(0.05);

  & > * {
    border-radius: 0.25rem;
    background-color: var(--color-white);
    box-shadow: var(--shadow-elevation-medium), 0 0 3px hsl(var(--shadow-color));
  }
`;

interface Props {};

const HomePage: React.FC<Props> = () => {
  return (
    <Page>
      <InputLeft />
      <OutputRight />
    </Page>
  );
};

export default HomePage;
