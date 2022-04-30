import React from 'react';
import BarChartWithRounds from '../../../../components/charts/BarChartWithRounds';
import xkcd from '../../../../data/xkcd';
import useInterval from '../../../../hooks/useInterval';
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
  contingency: {
    name: 'Contingency',
    explanation: 'The Contingent vote is kinda like an automatic version of the primary/general system seen in many parts of the US. With the major assumption that voter preferences wouldn\'t change between the primary and general vote. In Contingent votes, voters rank their preferences. If no candidate gets a majority in the first round, all except for the top 2 (more if there are ties) candidates get eliminated. Every voter that voted for an eliminated candidate will have their vote moved to whichever of the two candidates they prefer over the other.',
  },
  supplementary: {
    name: 'Supplementary',
    explanation: 'The Supplementary vote is similar to contingency except voters only rank 1 alternative. If neither of their two votes makes it to the second round (if there is a second round), then they simply don\'t vote for anyone.'
  },
  sri_lanka: {
    name: 'Sri Lankan Contingency',
    explanation: 'In Sri Lanka, they use a version of the supplmentary vote to elect their president. Instead of ranking only their top 2 choices, they rank their top 3.'
  },
};

const ContingencyBlock: React.FC<Props> = ({ data }) => {  
  const [selectedMethod, setSelectedMethod] = React.useState('contingency');
  const [currentRound, setCurrentRound] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  useInterval(() => {
    setCurrentRound(current => 
      (current + 1) % ((data?.[selectedMethod]?.length || 0) + 2)
    );
  }, isPaused ? null : 1900);

  const Chart = React.useMemo(() => {
    return info?.[selectedMethod]?.visualization || BarChartWithRounds
  }, [selectedMethod]);

  const barStyles = React.useMemo(() => {
    return Object.keys(data?.irv?.[0] || {}).reduce((acc, c) => ({
      ...acc,
      [c]: { fill: xkcd[c]?.hex || 'var(--color-black)' }
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
      isPaused={isPaused}
      handlePause={() => setIsPaused(!isPaused)}
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
