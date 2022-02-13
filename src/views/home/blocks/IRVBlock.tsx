import React from 'react';
import Block from './Block';

interface Props {};

const info = {
  irv: {
    explanation: ''
  },
  coombs: {
    explanation: ''
  },
  fab_irv: {
    explanation: ''
  },
};

const IRVBlock: React.FC<Props> = () => {
  const [selectedMethod, setSelectedMethod] = React.useState('irv');

  return (
    <Block
      title="Instant Runoff"
      info={info}
      method={selectedMethod}
      setMethod={setSelectedMethod}
    >
    </Block>
  );
};

export default IRVBlock;
