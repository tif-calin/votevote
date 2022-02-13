import React from 'react';
import BarChartWithRounds from '../../../components/charts/BarChartWithRounds';
import xkcd from '../../../data/xkcd';
import useInterval from '../../../hooks/useInterval';
import Block from './Block';

interface Props {
  data: { [methodKey: string]: { [candidateKey: string]: number }[] };
};

type Info = { 
  [key: string]: { 
    explanation?: string, 
    visualization?: React.FC<any>, 
  } 
};

const info: Info = {
  irv: {
    explanation: 'IRV is the most well-known for of ranked-choice voting. Every round, if no candidate has gotten a majority of the remaining votes, the candidate with the fewest votes is eliminated. Those who voted for that candidate will have their vote move to their next highest pick.',
    visualization: BarChartWithRounds,
  },
  coombs: {
    explanation: 'This is basically the same as IRV except instead of eliminating the candidate with the fewest first-choice votes, you eliminated the candidate with the most last-choice votes. Essentially, you remove the most hated candidate each round.'
  },
  fab_irv: {
    explanation: 'I\'m not quite sure what to call this method (I call it "Front and Back IRV"), but it seems like a pretty logical next step in the succession of things to take into account both first-choice and last-choice votes, right? In this method, you calculate a score for each candidate by adding up how many voters picked them first and subtract away how many voters picked them last. If there\'s no candidate with a majority of first-choice votes, you remove the candidate with the lowest score.'
  },
};

const IRVBlock: React.FC<Props> = ({ data }) => {
  const [selectedMethod, setSelectedMethod] = React.useState('irv');
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

  const currentRoundNumber = Math.min(currentRound, data?.[selectedMethod]?.length - 1 || 0);

  return (
    <Block
      title="Instant Runoff"
      info={info}
      method={selectedMethod}
      setMethod={setSelectedMethod}
    >
      {
        data[selectedMethod] ? <Chart
          barStyles={barStyles}
          round={data?.[selectedMethod]?.[currentRoundNumber] || {}}
        />: null
      }
    </Block>
  );
};

const MemoizedIRVBlock = React.memo(IRVBlock);

export default IRVBlock;
export { MemoizedIRVBlock };
