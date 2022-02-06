import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex-basis: 55%;
  flex-grow: 1;

  background: #33cc;
`;

interface Props {};

const OutputRight: React.FC<Props> = () => {
  return (
    <Container>

    </Container>
  );
};

export default OutputRight;
