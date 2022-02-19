import React from 'react';
import styled from 'styled-components';

interface Props {
  isWinner?: boolean;
  [prop: string]: any;
};

const Container = styled.g`
  & > rect {
    transition: 
      height 0.5s ease-in-out,
      y 0.5s ease-in-out
    ;
  }

  &.winner {
    & rect {
      stroke-width: 6;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  & > text.bar-label {
    pointer-events: none;
    fill: var(--color-white);
    opacity: 0;
    stroke: var(--color-white);
    mix-blend-mode: difference;

    transition: opacity 0.2s ease-in-out;
  }

  & text.zero {
    opacity: 0.5;
    // filter: blur(0.5px);
    pointer-events: stroke;
    cursor: default;

    &:hover { 
      // filter: blur(0.1px); 
      opacity: 1;
    }
  }

  &:hover {
    & > rect { stroke: #fff0; }
    & > text { opacity: 1; }
  }
`;

const Bar: React.FC<Props> = ({ children, isWinner, ...props }) => {
  return (
    <Container
      className={isWinner ? 'bar winner' : 'bar'}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Bar;
