import React from 'react';
import styled from 'styled-components';
import BlockBottom from './BlockBottom';
import BlockTop from './BlockTop';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--padding);
`;

const BlockMiddle = styled.div`
  min-height: calc(200px + 5vh);
  max-height: calc(250px + 15vh);
  width: 100%;

  border: 1px solid hsl(var(--shadow-color));; 
  border-radius: 0.15rem;
`;

interface Props {
  
};

const methods = ['fptp', 'veto', 'signed'];
const explanations: { [key: string]: string } = {
  fptp: 'First Past the Post, aka Plurality, is one of the most common voting methods. Every voter votes for a single candidate and the candidate with the most votes wins.',
  veto: 'Veto is essentially the same except instead of voting FOR a candidate, you vote against a candidate. The least hated candidate wins.',
  signed: 'What if you could choose whether you want to vote FOR a candidate or AGAINST a candidate?'
};

const PluralityBlock: React.FC<Props> = () => {
  const [selectedMethod, setSelectedMethod] = React.useState<string>(methods[0]);
  const explanation = React.useMemo(() => explanations[selectedMethod], [selectedMethod]);

  return (<Container>
    <BlockTop 
      title="Plurality"
      options={methods}
      selected={selectedMethod}
      setSelected={setSelectedMethod}
    />
    <BlockMiddle />
    <BlockBottom
      explanation={explanation}
    />
  </Container>);
};

export default PluralityBlock;
