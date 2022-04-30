import React from 'react';
import styled from 'styled-components';

interface Props {
  height: number;
  ticks: number[][];
};

const Container = styled.g`
  font-size: 0.8rem;
`;

const YAxisLinear: React.FC<Props> = ({ height, ticks }) => {
  return (
    <Container className="y-axis">
      <line x1={0} y1={0} x2={0} y2={height} />
      {ticks.map(([tick, y]) => {
        return (
          <g key={tick} 
            className="y-tick" 
            transform={`translate(0,${y})`}
          >
            <line x2={-4} />
            <text
              x={-6} y="0.25rem"
              textAnchor="end"
            >{tick.toLocaleString("en-US")}</text>
          </g>
        );
      })}
    </Container>
  );
};

export default YAxisLinear;
