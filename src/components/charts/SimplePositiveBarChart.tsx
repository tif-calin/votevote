import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import useChartDimensions from '../../hooks/useChartDimensions';
import YAxisLinear from './components/YAxisLinear';
import Bar from './components/Bar';

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

  const maxScore = React.useMemo(() => Math.max(...Object.values(data)), [data]);

  const xScale = d3.scaleBand()
    .domain(Object.keys(data))
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
                x={xScale(name) || 0} y={yScale(score)}
                width={xScale.bandwidth()}
                floor={height || 0}
                {...(barStyles?.[name] || {})}
              />
            );
          })}
        </g>

        <g className="x-axis" transform={`translate(0,${height})`}>
          <line x2={width} />
          {xScale.domain().map((name: string, i) => {
            const xOffset = Number(xScale(name)) + xScale.bandwidth() / 2;
            
            const labelCount = xScale.domain().length;
            const howManyLabelsToShow = Math.min(labelCount, Math.ceil(width / 96));
            const every = Math.round(labelCount / howManyLabelsToShow);

            return (
              <g 
                className="x-tick"  key={name}
                transform={`translate(${xOffset},0)`}
                opacity={(i % every) ? 0 : 1}
              >
                <line y2={8} strokeDasharray="2 2" />
                <text 
                  y={20}
                  textAnchor="middle"
                  style={{ 
                    fontWeight: data[name] === maxScore ? 350 : 100,
                  }}
                >{name}</text>
              </g>
            );
          })}
        </g>

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
