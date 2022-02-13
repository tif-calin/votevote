import React from 'react';
import styled from 'styled-components';
import XAxisBands from './components/XAxisBands';
import YAxisLinear from './components/YAxisLinear';

interface Props {
  passedRef: React.Ref<any>;
  height: number;
  width: number;

  isNegative: boolean;
  xScale: d3.ScaleBand<string>;
  yScale: d3.ScaleLinear<number, number>;
  winners: string[];
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  padding-left: 2rem;

  &.negative {
    padding-top: 2rem;
  }
  &:not(.negative) {
    padding-bottom: 2rem;
  }
  /* padding-${({ style }) => style?.['paddingTop'] ? 'top' : 'bottom'}: 2rem; */

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

const BarChart: React.FC<Props> = ({ 
  children, passedRef, height, width,
  isNegative = true, xScale, yScale, winners
}) => {
  const yTicks = yScale.nice().ticks();

  return (
    <Container 
      ref={passedRef} 
      className={`bar-chart${isNegative ? ' negative' : ''}`}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        stroke="var(--color-black)"
      >
        <g className="plot">
          {children}
        </g>

        <XAxisBands
          yLevel={isNegative ? 0 : height} 
          width={width}
          barWidth={xScale.bandwidth()}
          domain={xScale.domain().map(name => [name, xScale(name) || 0])}
          winners={winners}
        />

        <YAxisLinear
          height={height}
          ticks={yTicks.map(tick => [tick, yScale(tick) || 0])}
        />
      </svg>
    </Container>
  );
};

export default BarChart;
