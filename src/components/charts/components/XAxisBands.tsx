import React from 'react';
import styled from 'styled-components';

interface Props {
  [prop: string]: any;
  height: number;
  width: number;
  barWidth: number;
  winners: string[];
  domain: [string, number][];
};

const Container = styled.g`
  & text.winner {
    stroke: currentColor;
  }
`;

const XAxisBands: React.FC<Props> = ({ 
  domain, 
  barWidth, height, width, 
  winners 
}) => {
  const direction = height < 1 ? -1 : 1;
  return (
    <Container className="x-axis" transform={`translate(0, ${height})`} >
      <line x2={width} />
      {domain.map(([name, x], i) => {

        const labelCount = domain.length;
        const howManyLabels = Math.min(labelCount, Math.floor(width / 80));
        const every = Math.round(labelCount / howManyLabels);
        return (
          <g key={name}
            className="x-tick"
            transform={`translate(${x + (barWidth / 2)}, 0)`}
            opacity={(i % every) ? 0 : 1}
          >
            <line y2={direction * 8} strokeDasharray="2 2" />
            <text
              y={direction * 16}
              textAnchor="middle"
              alignmentBaseline='middle'
              className={winners.includes(name) ? 'winner' : ''}
            >{name}</text>
          </g>
        );
      })}
    </Container>
  );
};

export default XAxisBands;
