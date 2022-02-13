import React from 'react';
import NegativeBarChart from '../../../components/charts/NegativeBarChart';
import PositiveAndNegativeChart from '../../../components/charts/PositiveAndNegativeChart';
import PositiveBarChart from '../../../components/charts/PositiveBarChart';
import SignedBarChart from '../../../components/charts/SignedBarChart';
import xkcd from '../../../data/xkcd';
import Block from './Block';

interface Props {
  data: { [methodKey: string]: { [candidateKey: string]: number } };
};

const info: { [key: string]: { explanation?: string, visualization?: React.FC<any>, } } = {
  fptp: {
    explanation: 'First Past the Post, aka Plurality, is one of the most common voting methods. Every voter votes for a single candidate and the candidate with the most votes wins.',
    visualization: PositiveBarChart,
  },
  veto: {
    explanation: 'Veto is essentially the same except instead of voting FOR a candidate, you vote against a candidate. The least hated candidate wins.',
    visualization: NegativeBarChart,
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
    return info?.[selectedMethod]?.visualization || PositiveBarChart
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

export default PluralityBlock;
