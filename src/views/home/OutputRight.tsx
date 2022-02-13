import React from 'react';
import styled from 'styled-components';
import IRVBlock from './blocks/IRVBlock';
import PluralityBlock from './blocks/PluralityBlock';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex-basis: 55%;
  flex-grow: 1;

  gap: var(--padding);
`;

interface Props {
  data: any
};

const OutputRight: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <PluralityBlock 
        data={data}
      />
      <IRVBlock
        // data={data}
      />
    </Container>
  );
};

export default OutputRight;
