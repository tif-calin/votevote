import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import useChartDimensions from '../../hooks/useChartDimensions';

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

  & .bar {
    & > rect {
      transition: all 0.1s;
    }

    & > text {
      font-weight: 500;
      fill: var(--color-white);
      opacity: 0;
      stroke: #fff;
      mix-blend-mode: difference;

      transition: opacity 0.2s ease-in-out;
    }

    &:hover > rect {
      stroke: var(--color-white);
    }

    &:hover > text {
      opacity: 1;
    }
  }

  .y-axis {
    font-size: 0.8rem;
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
            return <g className="bar" key={name}>
              <rect
                x={xScale(name)} y={yScale(score)}
                width={xScale.bandwidth()}
                height={height - yScale(score)}
                {...(barStyles?.[name] || {})}
              />
              <text 
                transform={`
                  translate(${(xScale(name) || 0) + xScale.bandwidth() - 6}, ${height - 4}) 
                  rotate(-90) 
                  scale(${xScale.bandwidth() / 20})
                `}
              >{name}</text>
            </g>;
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
                className="x-tick" 
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

        <g className="y-axis">
          <line x1={0} y1={0} x2={0} y2={height} />
          {yTicks.map((tick: number) => {
            return (
              <g className="y-tick" transform={`translate(0,${yScale(tick)})`}>
                <line x2={-4} />
                <text
                  x={-8} y="0.25rem"
                  textAnchor="end"
                >{tick}</text>
              </g>
            );
          })}
        </g>
      </svg>
    </Container>
  );
};

export default SimplePositiveBarChart;
