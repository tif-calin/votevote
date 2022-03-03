import React from 'react';
import * as d3 from 'd3';
import BarChartWrapper from './BarChartWrapper';
import useChartDimensions from '../../hooks/useChartDimensions';
import FloatingBar from './components/FloatingBar';

interface Props {
  bars: { [key: string]: {
    score: number,
    style: { fill: string, [key: string]: string }
  }},
  maxVal?: number,
  minVal?: number,
};

const BarChart: React.FC<Props> = ({ bars, maxVal, minVal }) => {
  const [ref, { height, width }] = useChartDimensions();

  const [minScore, maxScore, winners] = React.useMemo(() => {
    let minScore = Number.MAX_SAFE_INTEGER;
    let maxScore = Number.MIN_SAFE_INTEGER;

    if (maxVal !== undefined && minVal !== undefined) {
      minScore = minVal;
      maxScore = maxVal;
    } else {
      Object.values(bars).forEach(bar => {
        if (bar.score > maxScore) maxScore = bar.score;
        if (bar.score < minScore) minScore = bar.score;
      });
    }

    const winners = Object.keys(bars).filter(c => bars[c].score === maxScore);

    return [minScore, maxScore, winners];
  }, [bars, maxVal, minVal]);

  const xScale = d3.scaleBand()
    .domain(Object.keys(bars).sort())
    .range([0, width])
    .padding(0.15);
  ;

  const yScale = d3.scaleLinear()
    .domain([Math.min(0, minScore) * 1.25, Math.max(0, maxScore) * 1.25])
    .range([height, 0])
    .nice()
  ;

  const yTicks = yScale.ticks();

  return (
    <BarChartWrapper
      passedRef={ref} height={height} width={width}
      xScale={xScale} yScale={yScale} 
      bars={bars}
      winners={winners}
      yTicks={yTicks}
    >
      {Object.entries(bars).map(([name, { score, style }]) => {
        const barWidth = xScale.bandwidth() || 0;
        const x = xScale(name) || 0;

        let y = yScale(score);
        let floor = yScale(0);
        return (
          x ? <FloatingBar key={name}
            name={name}
            width={barWidth}
            x={x} y={y} floor={floor}
            score={score}
            isWinner={score === maxScore}
            isNegative={y > floor || (floor === y && floor < height / 2)}
            {...style}
          /> : null
        );
      })}
    </BarChartWrapper>
  );
};

const MemoizedBarChart = React.memo(BarChart);

export default BarChart;
export { MemoizedBarChart };
