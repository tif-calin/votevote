import React from 'react';
import styled from 'styled-components';

interface Props {};

const Container = styled.div`
  height: calc(200px + 5vh);
  max-height: calc(250px + 15vh);
  width: 100%;
  overflow: hidden;

  border: 1px solid hsl(var(--shadow-color));; 
  border-radius: 0.15rem;

  & .no-chart {
    padding: 1rem;
  }
`;

const BlockMiddle: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children || <div className="no-chart">
        Not yet implemented :(
      </div>}
    </Container>
  );
};

export default BlockMiddle;
