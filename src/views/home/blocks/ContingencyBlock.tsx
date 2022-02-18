import React from 'react';
import BarChartWithRounds from '../../../components/charts/BarChartWithRounds';
import xkcd from '../../../data/xkcd';
import useInterval from '../../../hooks/useInterval';
import Block from './Block';

type Info = {
  [key: string]: { 
    name?: string,
    explanation?: string, 
    visualization?: React.FC<any>, 
  };
};

interface Props {
  data: { [methodKey: string]: { [candidateKey: string]: number }[] };
};

const info: Info = {
  cont: {
    name: 'Contingency',
  },
  supp: {
    name: 'Supplementary',
  },
  sl_cont: {
    name: 'Sri Lankan Contingency',
  },
};

const ContingencyBlock: React.FC<Props> = ({ data }) => {  
  const [selectedMethod, setSelectedMethod] = React.useState('contingency');
  const [currentRound, setCurrentRound] = React.useState(0);

  useInterval(() => {
    setCurrentRound(current => 
      (current + 1) % ((data?.[selectedMethod]?.length || 0) + 2)
    );
  }, 2500);

  const Chart = React.useMemo(() => {
    return info?.[selectedMethod]?.visualization || BarChartWithRounds
  }, [selectedMethod]);

  const barStyles = React.useMemo(() => {
    return Object.keys(data?.irv?.[0] || {}).reduce((acc, c) => ({
      ...acc,
      [c]: { fill: xkcd[c]?.hex || 'black' }
    }), {})
  }, [data]);

  const [maxVal, minVal, winners] = React.useMemo(() => {
    if (data?.[selectedMethod]?.length) {
      const rounds = data[selectedMethod];
      const final = rounds[rounds.length - 1] as { [key: string]: number };
      // const final = rounds.at(-1) as { [key: string]: number };
      const max = Math.max(...Object.values(final || {}));
      const min = Math.min(...Object.values(final || {}));
      
      return [
        max,
        min,
        Object.keys(final).filter(k => final[k] === max),
      ]
    } else return [undefined, undefined, []];
  }, [data, selectedMethod]);

  const currentRoundNumber = Math.min(currentRound, data?.[selectedMethod]?.length - 1 || 0);

  return (
    <Block
      title="Contingency"
      info={info}
      method={selectedMethod}
      setMethod={setSelectedMethod}
      round={currentRoundNumber}
      winners={winners}
    >
      {
        data[selectedMethod] ? <Chart
          barStyles={barStyles}
          round={data?.[selectedMethod]?.[currentRoundNumber] || {}}
          maxVal={maxVal}
          minVal={minVal}
        /> : null
      }
    </Block>
  );
};

export default ContingencyBlock;
