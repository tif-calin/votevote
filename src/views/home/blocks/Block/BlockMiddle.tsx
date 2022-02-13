import React from 'react';
import styled from 'styled-components';

interface Props {};

const Container = styled.div`
  min-height: calc(200px + 5vh);
  max-height: calc(250px + 15vh);
  width: 100%;
  overflow: hidden;

  border: 1px solid hsl(var(--shadow-color));; 
  border-radius: 0.15rem;
`;

const BlockMiddle: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default BlockMiddle;
