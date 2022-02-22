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
  isNegative?: boolean;
};

const BarPositive: React.FC<Props> = ({ 
  name, x, y, width, floor, isWinner, isNegative, ...style 
}) => {
  const notZero = Boolean(floor - y);

  if (isNegative) {
    const temp = y;
    y = floor;
    floor = temp;
  }

  const xOffset = Math.min(16, width / 3);

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
        className={notZero ? 'bar-label' : 'bar-label zero'}
        transform={`
          translate(
            ${isNegative 
                ? notZero ? xOffset : width * 0.25
                : notZero ? width - xOffset : width * 0.75
              }, 
            ${isNegative ? y + 4 : floor - 4}
          ) 
          rotate(-90)
          scale(${(isNegative ? -1 : 1) * width / 20})
        `}
      >{name}</text>
    </Bar>
  );
};

export default BarPositive;
