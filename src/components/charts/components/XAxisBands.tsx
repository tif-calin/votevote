import React from 'react';
import styled from 'styled-components';

interface Props {
  [prop: string]: any;
  height: number;
  width: number;
  barWidth: number;
  domain: [string, number][];
};

const Container = styled.g`
  & text {

  }
`;

const XAxisBands: React.FC<Props> = ({ 
  domain, 
  barWidth, height, width, 
  winner 
}) => {
  return (
    <Container className="x-axis" transform={`translate(0, ${height})`} >
      <line x2={width} />
      {domain.map(([name, x], i) => {
        const every = 1;
        return (
          <g key={name}
            className="x-tick"
            transform={`translate(${x + (barWidth / 2)}, 0)`}
            opacity={(i % every) ? 0 : 1}
          >
            <line y2={8} strokeDasharray="2 2" />
            <text
              y={20}
              textAnchor="middle"
              style={{ fontWeight: name === winner ? 350 : 100 }}
            >{name}</text>
          </g>
        );
      })}
    </Container>
  );
};

export default XAxisBands;
