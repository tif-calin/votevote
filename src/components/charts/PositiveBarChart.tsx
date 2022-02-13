import React from 'react';
import * as d3 from 'd3';
import useChartDimensions from '../../hooks/useChartDimensions';
import Bar from './components/Bar';
import BarChart from './BarChart';

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
    .domain([0, Math.round(maxScore * 1.25)])
    .range([height, 0])
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
    </BarChart>
  );
};

export default SimplePositiveBarChart;
