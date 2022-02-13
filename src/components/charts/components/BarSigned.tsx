import React from 'react';
import Bar from './Bar';

interface Props {
  name: string;
  x: number;
  width: number;
  ceil: number;
  score: number;
  floor: number;
  isWinner?: boolean;
  [styleProp: string]: string | number | boolean | undefined;
};

const BarSigned: React.FC<Props> = ({
  name, x, width, ceil, score, floor, isWinner, ...style
}) => {
  return (
    <Bar
      isWinner={isWinner}
      transform={`translate(${x}, ${floor})`}
    >
      <rect
        y={ceil - floor}
        width={width} height={floor - ceil}
        {...style}
      />
      <line 
        y1={score - floor} x2={width} y2={score - floor}
        strokeWidth="2"
      />
      <text
        className="bar-label"
        transform={`
          translate(${width - 6}, ${-4})
          rotate(-90)
          scale(${width / 20})
        `}
      />
    </Bar>
  );
};

export default BarSigned;
