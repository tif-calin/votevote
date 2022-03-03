import React from 'react';
import styled from 'styled-components';
import XAxisBands from './components/XAxisBands';
import YAxisLinear from './components/YAxisLinear';

interface Props {
  passedRef: React.Ref<any>;
  height: number;
  width: number;

  xScale: d3.ScaleBand<string>;
  yScale: d3.ScaleLinear<number, number>;
  yTicks?: number[];
  winners: string[];

  bars?: { [key: string]: { score: number, style: { fill: string,  [key: string]: string } } };
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;

  & text {
    font-weight: 400;
    stroke: none;
  }

  & > svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: visible;
  }
`;

const BarChartWrapper: React.FC<Props> = ({ 
  children, passedRef, height, width,
  xScale, yScale, yTicks, winners,
  bars
}) => {
  const yLevel = yScale(0);

  yTicks = (yTicks || (yScale as any).nice().ticks() as number[]);

  const xTicks: [string, number, boolean][] = xScale.domain().map((name, i) => {
    const score = Object.values(bars || {})?.[i]?.score;
    return [
      name, xScale(name) || 0, score ? score < 0 : score === 0 ? yLevel < height/2 : false
    ];
  });

  return (
    <Container 
      ref={passedRef} 
      className="bar-chart"
      style={
        yLevel < 1 ? {
          paddingTop: '2rem',
        } : yLevel >= height - 1 ? {
          paddingBottom: '2rem',
        } : {}
      }
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        stroke="var(--color-black)"
      >
        <g className="plot">
          {children}
        </g>

        <XAxisBands
          yLevel={yScale(0)} 
          width={width}
          barWidth={xScale.bandwidth()}
          ticks={xTicks}
          winners={winners}
          bars={bars}
        />

        <YAxisLinear
          height={height}
          ticks={yTicks.map(tick => [tick, yScale(tick) || 0])}
        />
      </svg>
    </Container>
  );
};

const MemoizedBarChartWrapper: React.FC<Props> = React.memo(BarChartWrapper);

export default BarChartWrapper;
export { MemoizedBarChartWrapper };
