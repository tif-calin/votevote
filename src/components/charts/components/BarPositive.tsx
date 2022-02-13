import React from 'react';
import styled from 'styled-components';

interface Props {
  [styleProp: string]: string | number | boolean | undefined;
  name: string;
  x: number;
  y: number;
  width: number;
  floor: number;
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

  & > text.bar-label {
    fill: var(--color-white);
    opacity: 0;
    stroke: #fff;
    mix-blend-mode: difference;

    transition: opacity 0.2s ease-in-out;
  }

  &:hover > rect {
    stroke: #fff0;
  }

  &:hover > text {
    opacity: 1;
  }
`;

const Bar: React.FC<Props> = ({ name, x, y, width, floor, isWinner, ...style }) => {
  return (
    <Container 
      className={isWinner ? 'bar winner' : 'bar'}
      transform={`translate(${x}, ${floor})`}
    >
      <rect
        y={y - floor}
        width={width} height={floor - y}
        {...style}
      />
      <text
        className="bar-label"
        transform={`
          translate(${width - 6}, ${-4}) 
          rotate(-90)
          scale(${width / 20})
        `}
      >{name}</text>
    </Container>
  );
};

export default Bar;
