import React from 'react';
import styled from 'styled-components';

interface Props {
  [prop: string]: any;
  yLevel: number;
  width: number;
  barWidth: number;
  winners: string[];
  ticks: [string, number, boolean?][];
  
  bars?: { [key: string]: { score: number, style: { fill: string,  [key: string]: string } } };
};

const Container = styled.g`  
  & text.winner {
    stroke: currentColor;
  }

  & .long {
    opacity: 0;
    &:hover { opacity: 1; }
  }
`;

const XAxisBands: React.FC<Props> = ({ 
  ticks, 
  barWidth, yLevel, width,
  winners 
}) => {
  return (
    <Container className="x-axis" transform={`translate(0, ${yLevel})`} >
      <line x2={width} />
      {ticks.map(([name, x, above = false], i) => {
        const estimatedLabelWidth = name.length * 8;
        return (
          <g key={name}
            className={`x-tick${estimatedLabelWidth > barWidth ? ' long' : ''}`}
            transform={`translate(${x + (barWidth / 2)}, 0)`}
          >
            <text
              y={above ? -8 : 16}
              textAnchor="middle"
              className={`${winners.includes(name) ? ' winner' : ' '}`}
            >{name}</text>
          </g>
        );
      })}
    </Container>
  );
};

export default XAxisBands;
