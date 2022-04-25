import React from 'react';
import BarWrapper from './BarWrapper';

interface Props {
  [styleProp: string]: string | number | boolean | undefined;
  name: string;
  x: number;
  y: number;
  score?: number;
  width: number;
  floor: number;
  isWinner?: boolean;
  isNegative?: boolean;
};

const numberFormat = {
  maximumSignificantDigits: 6
};

const FloatingBar: React.FC<Props> = ({ 
  name, x, y, score, width, floor, isWinner, isNegative, ...style 
}) => {
  const notZero = Boolean(floor - y);

  if (isNegative) {
    const temp = y;
    y = floor;
    floor = temp;
  }

  const xOffset = Math.min(16, width / 3);

  return (
    <BarWrapper
      isWinner={isWinner}
      transform={`translate(${x}, 0)`}
    >
      <rect
        width={width} y="-1rem" height="calc(100% + 2rem)" fill="var(--color-white)" stroke="transparent"
      />
      {score && (
        <text
          className='bar-score'
          x={isNegative ? width : 0} y={isNegative ? floor + 10 : y - 8}
          textAnchor={isNegative ? 'end' : 'start'}
          alignmentBaseline="middle"
        >{score.toLocaleString("en-US", numberFormat)}</text>
      )}
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
    </BarWrapper>
  );
};

export default FloatingBar;
