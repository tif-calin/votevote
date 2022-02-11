import React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import useChartDimensions from '../../hooks/useChartDimensions';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 2rem;
  padding-left: 2rem;

  & > svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  & rect {
    rx: 1.5;
    ry: 1.5;
  }
`;

interface Props {
  data: { [key: string]: number };
  barStyles: { [key: string]: { fill: string, [prop: string]: string } };
};

const SimplePositiveBarChart: React.FC<Props> = ({ data, barStyles }) => {
  const [ref, { height, width }] = useChartDimensions();

  const maxScore = React.useMemo(() => Math.max(...Object.values(data)), [data]);

  const xAxis = d3.scaleBand()
    .domain(Object.keys(data))
    .range([0, width])
    .padding(0.15);
  ;
  
  const yAxis = d3.scaleLinear()
    .domain([0,Math.round(maxScore * 1.5)])
    .range([height, 0])
  ;

  return (
    <Container ref={ref}>
      <svg 
        viewBox={`0 0 ${width} ${height}`}
        stroke="var(--color-black)"
      >
        <g className="plot">
          {Object.entries(data).map(([name, score]) => {
            return <rect
              key={name} className="bar"
              x={xAxis(name)} y={yAxis(score)}
              width={xAxis.bandwidth()}
              height={height - yAxis(score) + 5}
              {...(barStyles?.[name] || {})}
            />;
          })}
        </g>
        <g className="x-axis">
          <line y1={height} x2={width} y2={height} strokeWidth={2} />
        </g>
        <g className="y-axis">
          <line x1={0} y1={0} x2={0} y2={height} strokeWidth={2} />
        </g>
      </svg>
    </Container>
  );
};

export default SimplePositiveBarChart;
