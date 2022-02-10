import React from 'react';
import styled from 'styled-components';
import PluralityBlock from './blocks/PluralityBlock';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex-basis: 55%;
  flex-grow: 1;
  padding: var(--padding);
`;

interface Props {};

const OutputRight: React.FC<Props> = () => {
  return (
    <Container>
      <PluralityBlock />
    </Container>
  );
};

export default OutputRight;
