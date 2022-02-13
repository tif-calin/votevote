import React from 'react';
import * as d3 from 'd3';
import useChartDimensions from '../../hooks/useChartDimensions';
import BarChart from './BarChart';
import BarSigned from './components/BarSigned';

interface Props {
  bars: { [key: string]: {
    positive: number,
    negative: number,
    score: number,
    style: { [key: string]: { fill: string, [prop: string]: string } }
  }}
};

const PositiveAndNegativeChart: React.FC<Props> = ({ bars }) => {
  const [ref, { height, width }] = useChartDimensions();

  const [minScore, maxScore, winners] = React.useMemo(() => {
    let minNeg = 0;
    let maxPos = 0;
    let bestScore = Number.MIN_SAFE_INTEGER;

    Object.values(bars).forEach(bar => {
      if (bar.positive > maxPos) maxPos = bar.positive;
      if (bar.negative < minNeg) minNeg = bar.negative;
      if ((bar.positive + bar.negative) > bestScore) bestScore = bar.positive;
    });
    
    const winners = Object.keys(bars).filter(c => {
      const vals = bars[c];
      return (vals.positive + vals.negative) === bestScore
    });

    return [minNeg, maxPos, winners];
  }, [bars]);

  const xScale = d3.scaleBand()
    .domain(Object.keys(bars).sort())
    .range([0, width])
    .padding(0.15);
  ;

  const yScale = d3.scaleLinear()
    .domain([minScore * 1.25, maxScore * 1.25])
    .range([height, 0])
  ;

  return (
    <BarChart
      passedRef={ref} height={height} width={width}
      xScale={xScale}
      yScale={yScale}
      winners={winners}
    >
      {Object.entries(bars).map(([name, {positive, score, negative, style}]) => {
        const barWidth = xScale.bandwidth() || 0;
        const x = xScale(name) || 0;

        return (
          <BarSigned key={`${name}`}
            name={name}
            x={x} 
            ceil={yScale(positive) || 0}
            score={yScale(score) || 0}
            width={barWidth}
            floor={yScale(negative) || 0}
            isWinner={positive === maxScore}
            {...style}
          />
        );
      })}
    </BarChart>
  );
};

export default PositiveAndNegativeChart;