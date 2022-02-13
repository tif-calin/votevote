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
  if (y > floor) {
    const temp = y;
    y = floor;
    floor = temp;
  }

  return (
    <Bar 
      isWinner={isWinner}
      transform={`translate(${x}, 0)`}
    >
      <rect
        y={y}
        width={width} height={floor - y}
        {...style}
      />
      <text
        className="bar-label"
        transform={`
          translate(${width - 6}, ${floor -4}) 
          rotate(-90)
          scale(${width / 20})
        `}
      >{name}</text>
    </Bar>
  );
};

export default BarPositive;
