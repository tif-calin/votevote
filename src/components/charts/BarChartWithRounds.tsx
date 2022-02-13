import React from 'react';
import SignedBarChart from './SignedBarChart';

interface Props {
  round: { [key: string]: number };
  barStyles: { [key: string]: { fill: string, [prop: string]: string } };
};

const BarChartWithRounds: React.FC<Props> = ({ round, barStyles }) => {
  const bars = React.useMemo(() => {
    return Object.keys(round).reduce((acc, c) => ({
      ...acc, 
      [c]: {
        score: round[c],
        style: barStyles[c] || { fill: 'black' }
      }
    }), {});
  }, [round, barStyles]);

  return (
    <SignedBarChart 
      bars={bars}
    />
  );
};

export default BarChartWithRounds;
