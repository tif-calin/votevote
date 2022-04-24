import React from 'react';
import styled from 'styled-components';

interface Props {
  isWinner?: boolean;
  [prop: string]: any;
};

const Container = styled.g<{
  isWinner?: boolean;
}>`
  & > rect {
    transition: 
      height 0.5s ease-in-out,
      y 0.5s ease-in-out
    ;
  }

  ${({ isWinner }) => isWinner && `
    & rect {
      stroke-width: 6;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  `}

  & > text.bar-label {
    pointer-events: none;
    fill: var(--color-white);
    opacity: 0;
    stroke: var(--color-white);
    mix-blend-mode: difference;

    transition: opacity 0.2s ease-in-out;
  }

  & > text.bar-score {
    opacity: 0;
    font-size: 0.75rem;
    transition: opacity 0.1s;
    transition-delay: 1s;

    &:hover { opacity: 1; }
  }

  & text.zero {
    opacity: 0.5;
    cursor: default;

    &:hover { 
      opacity: 1;
    }
  }

  &:hover {
    & > rect { stroke: #fff0; }
    & > text { opacity: 1; }
  }
`;

const BarWrapper: React.FC<Props> = ({ children, isWinner, ...props }) => {
  return (
    <Container
      isWinner={isWinner}
      {...props}
    >
      {children}
    </Container>
  );
};

export default BarWrapper;
