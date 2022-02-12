import React from 'react';
import styled from 'styled-components';

interface Props {
  [styleProp: string]: string | number | boolean | undefined;
  name: string;
  x: number;
  y: number;
  width: number;
  isWinner?: boolean;
};

const Container = styled.g`
  &.winner {
    & rect {
      stroke-width: 6;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  & > rect {
    transition: all 0.1s;
  }

  & > text {
    font-weight: 500;
    fill: var(--color-white);
    opacity: 0;
    stroke: #fff;
    mix-blend-mode: difference;

    transition: opacity 0.2s ease-in-out;
  }

  &:hover > rect {
    stroke: var(--color-white);
  }

  &:hover > text {
    opacity: 1;
  }
`;

const BarNegative: React.FC<Props> = ({ name, x, y, width, isWinner, ...style }) => {
  return (
    <Container 
      className={isWinner ? 'bar winner' : 'bar'}
      transform={`translate(${x}, 0)`}
    >
      <rect
        width={width} height={y}
        {...style}
      />
      <text
        transform={`
          translate(${6}, ${4}) 
          rotate(-90)
          scale(${-width / 20})
        `}
      >{name}</text>
    </Container>
  );
};

export default BarNegative;
