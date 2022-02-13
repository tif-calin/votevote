import React from 'react';
import NegativeBarChart from '../../../components/charts/NegativeBarChart';
import SimplePositiveBarChart from '../../../components/charts/SimplePositiveBarChart';
import xkcd from '../../../data/xkcd';
import Block from './Block';

interface Props {
  data: { [methodKey: string]: { [candidateKey: string]: number } };
};

const info: { [key: string]: { explanation?: string, visualization?: React.FC<any>, } } = {
  fptp: {
    explanation: 'First Past the Post, aka Plurality, is one of the most common voting methods. Every voter votes for a single candidate and the candidate with the most votes wins.'
  },
  veto: {
    explanation: 'Veto is essentially the same except instead of voting FOR a candidate, you vote against a candidate. The least hated candidate wins.',
    visualization: NegativeBarChart
  },
  signed: {
    explanation: 'What if you could choose whether you want to vote FOR a candidate or AGAINST a candidate?'
  },
}

const PluralityBlock: React.FC<Props> = ({ data }) => {
  const [selectedMethod, setSelectedMethod] = React.useState<string>('fptp');

  const barStyles = React.useMemo(() => {
    return (data?.[selectedMethod]) 
      ? Object.keys(data[selectedMethod]).reduce((a, c: string) => ({ ...a, [c]: { fill: xkcd[c]?.hex } }), {})
      : {}
    ;
  }, [data, selectedMethod]);

  const Chart = React.useMemo(() => {
    return info?.[selectedMethod]?.visualization || SimplePositiveBarChart
  }, [selectedMethod]);

  return (
    <Block
      title="Plurality"
      info={info}
      method={selectedMethod}
      setMethod={setSelectedMethod}
    >
      {data[selectedMethod] ? <Chart
        data={data[selectedMethod]}
        barStyles={barStyles}
      /> : null}
    </Block>
  );
};

export default PluralityBlock;
