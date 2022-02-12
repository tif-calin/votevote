import React from 'react';
import styled from 'styled-components';

interface Props {
  [styleProp: string]: string | number;
  name: string;
  x: number;
  y: number;
  width: number;
  floor: number;
};

const Container = styled.g`
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

const Bar: React.FC<Props> = ({ name, x, y, width, floor, ...style }) => {
  return (
    <Container 
      className="bar"
      transform={`translate(${x}, ${floor})`}
    >
      <rect
        y={y - floor}
        width={width} height={floor - y}
        {...style}
      />
      <text
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
