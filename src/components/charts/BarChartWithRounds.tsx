import React from 'react';
import { MemoizedBarChart } from './BarChart';

interface Props {
  round: { [key: string]: number };
  barStyles: { [key: string]: { fill: string, [prop: string]: string } };
  maxVal?: number;
  minVal?: number;
};

const BarChartWithRounds: React.FC<Props> = ({ round, barStyles, maxVal, minVal }) => {
  const bars = React.useMemo(() => {
    return Object.keys(round).reduce((acc, c) => ({
      ...acc, 
      [c]: {
        score: round[c],
        style: barStyles[c] || { fill: 'var(--color-black)' }
      }
    }), {});
  }, [round, barStyles]);

  return (
    <MemoizedBarChart 
      bars={bars}
      maxVal={maxVal}
      minVal={minVal}
    />
  );
};

export default BarChartWithRounds;
