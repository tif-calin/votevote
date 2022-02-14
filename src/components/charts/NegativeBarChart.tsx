import React from 'react';
import * as d3 from 'd3';
import useChartDimensions from '../../hooks/useChartDimensions';
import BarNegative from './components/BarNegative';
import { MemoizedBarChart } from './BarChart';

interface Props {
  bars: { [key: string]: {
    score: number,
    style: { [key: string]: { fill: string, [prop: string]: string } }
  }}
};

const NegativeBarChart: React.FC<Props> = ({ bars }) => {  
  const [ref, { height, width }] = useChartDimensions();

  const scores = Object.values(bars).map(bar => bar.score);

  const minScore = React.useMemo(() => Math.min(...scores), [scores]);
  const maxScore = React.useMemo(() => Math.max(...scores), [scores]);
  const winners = React.useMemo(() => Object.keys(bars).filter(c => bars[c].score === maxScore), [bars, maxScore]);

  const xScale = d3.scaleBand()
    .domain(Object.keys(bars).sort())
    .range([0, width])
    .padding(0.15);
  ;

  const yScale = d3.scaleLinear()
    .domain([0, Math.round(minScore * 1.25)])
    .range([0, height])
  ;

  return (
    <MemoizedBarChart
      passedRef={ref} height={height} width={width}
      xScale={xScale}
      yScale={yScale}
      winners={winners}
    >
      {Object.entries(bars).map(([name, { score, style }]) => {
        const x = xScale(name) || 0;
        return ( 
          x ? <BarNegative key={name}
            name={name}
            x={x} y={yScale(score) || 0}
            width={xScale.bandwidth() || 0}
            isWinner={winners.includes(name)}
            {...(style || {})}
          /> : null
        );
      })}
    </MemoizedBarChart>
  );
};

export default NegativeBarChart;
