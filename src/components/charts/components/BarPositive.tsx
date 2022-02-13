import React from 'react';
import Bar from './Bar';

interface Props {
  [styleProp: string]: string | number | boolean | undefined;
  name: string;
  x: number;
  y: number;
  width: number;
  floor: number;
  isWinner?: boolean;
};

const BarPositive: React.FC<Props> = ({ 
  name, x, y, width, floor, isWinner, ...style 
}) => {
  return (
    <Bar 
      isWinner={isWinner}
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
    </Bar>
  );
};

export default BarPositive;
