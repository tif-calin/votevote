import React from 'react';
import Bar from './Bar';

interface Props {
  [styleProp: string]: string | number | boolean | undefined;
  name: string;
  x: number;
  y: number;
  width: number;
  isWinner?: boolean;
};

const BarNegative: React.FC<Props> = ({ 
  name, x, y, width, isWinner, ...style 
}) => {
  return (
    <Bar 
      isWinner={isWinner}
      transform={`translate(${x}, 0)`}
    >
      <rect
        width={width} height={y}
        {...style}
      />
      <text
        className={y ? 'bar-label' : 'bar-label zero'}
        transform={`
          translate(${6}, ${4}) 
          rotate(-90)
          scale(${-width / 20})
        `}
      >{name}</text>
    </Bar>
  );
};

export default BarNegative;
