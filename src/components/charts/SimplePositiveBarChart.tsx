import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import useChartDimensions from '../../hooks/useChartDimensions';
import YAxisLinear from './components/YAxisLinear';
import Bar from './components/Bar';
import XAxisBands from './components/XAxisBands';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  font-weight: 100;

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

const SimplePositiveBarChart: React.FC<Props> = ({ data, barStyles }) => {
  const [ref, { height, width }] = useChartDimensions();

  const [maxScore, winners] = React.useMemo(() => {
    const maxScore = Math.max(...Object.values(data));
    const winners = Object.keys(data).filter(c => data[c] === maxScore);
    return [maxScore, winners];
  }, [data]);

  const xScale = d3.scaleBand()
    .domain(Object.keys(data).sort())
    .range([0, width])
    .padding(0.15);
  ;
  
  const yScale = d3.scaleLinear()
    .domain([0,Math.round(maxScore * 1.25)])
    .range([height, 0])
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
              <Bar key={name}
                name={name}
                x={xScale(name) || 0} y={yScale(score) || 0}
                width={xScale.bandwidth() || 0}
                floor={height || 0}
                isWinner={score === maxScore}
                {...(barStyles?.[name] || {})}
              />
            );
          })}
        </g>

        <XAxisBands 
          height={height} width={width}
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

export default SimplePositiveBarChart;
