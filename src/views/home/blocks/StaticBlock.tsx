import React from 'react';
import SignedBarChart from '../../../components/charts/SignedBarChart';
import Block from './Block';
import info from '../info';
import { ResultFull } from '../../../services/voting/SuperElection';
import xkcd from '../../../data/xkcd';

interface Props {
  title: string;
  methods: string[];
  results: {
    [method: string]: ResultFull;
  };
};

const StaticBlock: React.FC<Props> = ({
  title,
  methods,
  results
}) => {
  const [selectedMethod, setSelectedMethod] = React.useState<string>(methods[0]);

  const blockInfo = React.useMemo(() => {
    return methods.reduce((acc, method) => ({
      ...acc, [method]: { name: info[method]?.names?.[0], ...info[method] }
    }), {});
  }, [methods]);

  const bars = React.useMemo(() => {
    const result = results[selectedMethod]?.result?.[0];
    if (!result) return {};
    const candidates = Object.keys(result);

    return candidates.reduce((acc, candidate) => {
      return {
        ...acc,
        [candidate]: {
          style: { fill: xkcd[candidate]?.hex || 'var(--color-black)' },
          ...result[candidate]
        }
      };
    }, {});
  }, [selectedMethod, results]);

  return (
    <Block
      title={title}
      method={selectedMethod} 
      setMethod={setSelectedMethod}
      info={blockInfo}
      winners={results?.[selectedMethod]?.winners || []}
    >
      {results[selectedMethod] ? <SignedBarChart
        bars={bars}
      /> : null}
    </Block>
  );
};

const MemoizedStaticBlock = React.memo(StaticBlock);

export default StaticBlock;
export { MemoizedStaticBlock }