import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

interface Props {
  height: number;
  yTicks: number[];
  scale: d3.ScaleLinear<number, number, never>;
};

const Container = styled.g`
  font-size: 0.8rem;
`;

const YAxisLinear: React.FC<Props> = ({ height, yTicks, scale }) => {
  return (
    <Container className="y-axis">
      <line x1={0} y1={0} x2={0} y2={height} />
      {yTicks.map((tick: number) => {
        return (
          <g key={tick} 
            className="y-tick" 
            transform={`translate(0,${scale(tick)})`}
          >
            <line x2={-4} />
            <text
              x={-8} y="0.25rem"
              textAnchor="end"
            >{tick}</text>
          </g>
        );
      })}
    </Container>
  );
};

export default YAxisLinear;
