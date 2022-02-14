import React from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart';
import useChartDimensions from '../../hooks/useChartDimensions';
import BarPositive from './components/BarPositive';

interface Props {
  bars: { [key: string]: {
    score: number,
    style: { [key: string]: { fill: string, [prop: string]: string } }
  }}
};

const SignedBarChart: React.FC<Props> = ({ bars }) => {
  const [ref, { height, width }] = useChartDimensions();

  const [minScore, maxScore, winners] = React.useMemo(() => {
    let minScore = 0;
    let maxScore = 0;

    Object.values(bars).forEach(bar => {
      if (bar.score > maxScore) maxScore = bar.score;
      if (bar.score < minScore) minScore = bar.score;
    });

    const winners = Object.keys(bars).filter(c => bars[c].score === maxScore);

    return [minScore, maxScore, winners];
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

  const yTicks = yScale.ticks();

  return (
    <BarChart
      passedRef={ref} height={height} width={width}
      xScale={xScale} yScale={yScale}
      winners={winners}
      yTicks={yTicks}
    >
      {Object.entries(bars).map(([name, { score, style }]) => {
        const barWidth = xScale.bandwidth() || 0;
        const x = xScale(name) || 0;

        let y = yScale(score);
        let floor = yScale(0);
        return (
          x ? <BarPositive key={name}
            name={name}
            width={barWidth}
            x={x} y={y} floor={floor}
            isWinner={score === maxScore}
            {...style}
          /> : null
        );
      })}
    </BarChart>
  );
};

const MemoizedSignedBarChart = React.memo(SignedBarChart);

export default SignedBarChart;
export { MemoizedSignedBarChart };
