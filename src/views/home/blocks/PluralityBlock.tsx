import React from 'react';
import SignedBarChart from '../../../components/charts/SignedBarChart';
import xkcd from '../../../data/xkcd';
import Block from './Block';

interface Props {
  data: { [methodKey: string]: { [candidateKey: string]: number } };
};

type Info = {
  [key: string]: {
    name?: string,
    explanation?: string, 
    visualization?: React.FC<any>, 
  };
};

const info: Info = {
  fptp: {
    name: 'First Past the Post',
    explanation: 'First Past the Post, aka Plurality, is one of the most common voting methods. Every voter votes for a single candidate and the candidate with the most votes wins.',
    visualization: SignedBarChart,
  },
  veto: {
    explanation: 'Veto is essentially the same except instead of voting FOR a candidate, you vote against a candidate. The least hated candidate wins.',
    visualization: SignedBarChart,
  },
  signed: {
    explanation: 'What if you could choose whether you want to vote FOR a candidate or AGAINST a candidate?',
    visualization: SignedBarChart,
  },
  vfa: {
    explanation: 'Vote For or Against is similar to Signed, but you don\'t have to choose! In fact, you\'re required to vote both FOR a candidate as well as against another.',
    visualization: SignedBarChart,
  }
};

const PluralityBlock: React.FC<Props> = ({ data }) => {
  const [selectedMethod, setSelectedMethod] = React.useState<string>('fptp');

  const Chart = React.useMemo(() => {
    return info?.[selectedMethod]?.visualization || SignedBarChart
  }, [selectedMethod]);

  const bars = React.useMemo(() => {
    return Object.keys(data?.fptp || {}).reduce((acc, c) => {
      return { 
        ...acc, 
        [c]: {
          positive: data.fptp[c],
          negative: data.veto[c],
          score: data?.[selectedMethod]?.[c] || 0,
          style: { fill: xkcd[c]?.hex || 'black' }
        }
      };
    }, {});
  }, [data, selectedMethod]);

  if (!data?.[selectedMethod]) return null;
  return (
    <Block
      title="Plurality"
      info={info}
      method={selectedMethod}
      setMethod={setSelectedMethod}
    >
      {
        data[selectedMethod] ? <Chart
          bars={bars}
        /> : null
      }
    </Block>
  );
};

const MemoizedPluralityBlock = React.memo(PluralityBlock);

export default PluralityBlock;
export { MemoizedPluralityBlock };
