import React from 'react';
import * as d3 from 'd3';
import useChartDimensions from '../../hooks/useChartDimensions';
import BarNegative from './components/BarNegative';
import BarChart from './BarChart';

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

  return (
    <BarChart
      passedRef={ref} height={height} width={width}
      xScale={xScale}
      yScale={yScale}
      winners={winners}
    >
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
    </BarChart>
  );
};

export default NegativeBarChart;
