import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import useChartDimensions from '../../hooks/useChartDimensions';
import XAxisBands from './components/XAxisBands';
import YAxisLinear from './components/YAxisLinear';
import BarNegative from './components/BarNegative';

interface Props {};

const Container = styled.div`  
  height: 100%;
  width: 100%;
  padding: 1rem;
  padding-top: 2rem;
  padding-left: 2rem;

  & text {
    font-weight: 400;
    stroke: none;
  }

  & > svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: visible;
  }
`;

interface Props {
  data: { [key: string]: number };
  barStyles: { [key: string]: { fill: string, [prop: string]: string } };
};

const NegativeBarChart: React.FC<Props> = ({ data, barStyles }) => {
  const [ref, { height, width }] = useChartDimensions();

  const minScore = React.useMemo(() => Math.min(...Object.values(data)), [data]);
  const maxScore = React.useMemo(() => Math.max(...Object.values(data)), [data]);
  const winners = React.useMemo(() => Object.keys(data).filter(c => data[c] === maxScore), [data, maxScore]);

  const xScale = d3.scaleBand()
    .domain(Object.keys(data).sort())
    .range([0, width])
    .padding(0.15);
  ;

  const yScale = d3.scaleLinear()
    .domain([0, Math.round(minScore * 1.25)])
    .range([0, height])
  ;

  const yTicks = yScale.nice().ticks();

  return (
    <Container ref={ref}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        stroke="var(--color-black)"
      >
        <g className="plot">
          {Object.entries(data).map(([name, score]) => {
            return ( 
              <BarNegative key={name}
                name={name}
                x={xScale(name) || 0} y={yScale(score) || 0}
                width={xScale.bandwidth() || 0}
                isWinner={winners.includes(name)}
                {...(barStyles?.[name] || {})}
              />
            );
          })}
        </g>

        <XAxisBands 
          height={0} width={width}
          barWidth={xScale.bandwidth()}
          domain={xScale.domain().map(name => [name, xScale(name) || 0])}
          winners={winners}
        />

        <YAxisLinear
          height={height}
          yTicks={yTicks}
          scale={yScale}
        />
      </svg>
    </Container>
  );
};

export default NegativeBarChart;
