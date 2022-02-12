import React from 'react';
import styled from 'styled-components';
import NegativeBarChart from '../../../components/charts/NegativeBarChart';
import SimplePositiveBarChart from '../../../components/charts/SimplePositiveBarChart';
import xkcd from '../../../data/xkcd';
import BlockBottom from './BlockBottom';
import BlockTop from './BlockTop';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--padding) / 2);
`;

const BlockMiddle = styled.div`
  min-height: calc(200px + 5vh);
  max-height: calc(250px + 15vh);
  width: 100%;
  overflow: hidden;

  border: 1px solid hsl(var(--shadow-color));; 
  border-radius: 0.15rem;
`;

interface Props {
  data: { [methodKey: string]: { [candidateKey: string]: number } };
};

const methods = ['fptp', 'veto', 'signed'];
const explanations: { [key: string]: string } = {
  fptp: 'First Past the Post, aka Plurality, is one of the most common voting methods. Every voter votes for a single candidate and the candidate with the most votes wins.',
  veto: 'Veto is essentially the same except instead of voting FOR a candidate, you vote against a candidate. The least hated candidate wins.',
  signed: 'What if you could choose whether you want to vote FOR a candidate or AGAINST a candidate?'
};
const visualizations: { [key: string]: React.FC<any> } = {
  veto: NegativeBarChart
};

const PluralityBlock: React.FC<Props> = ({ data }) => {
  const [selectedMethod, setSelectedMethod] = React.useState<string>(methods[0]);
  const explanation = React.useMemo(() => explanations[selectedMethod], [selectedMethod]);
  const barStyles = React.useMemo(() => {
    return (data?.[selectedMethod]) 
      ? Object.keys(data[selectedMethod]).reduce((a, c: string) => ({ ...a, [c]: { fill: xkcd[c].hex } }), {})
      : {}
    ;
  }, [data, selectedMethod]);

  const Chart = React.useMemo(() => {
    return visualizations[selectedMethod] || SimplePositiveBarChart
  }, [selectedMethod]);

  return (<Container>
    <BlockTop 
      title="Plurality"
      options={methods}
      selected={selectedMethod}
      setSelected={setSelectedMethod}
    />
    <BlockMiddle>
      {data[selectedMethod] ? <Chart
        data={data[selectedMethod]}
        barStyles={barStyles}
      /> : <div style={{ padding: "1rem" }}>No data...</div>}
    </BlockMiddle>
    <BlockBottom
      explanation={explanation}
    />
  </Container>);
};

export default PluralityBlock;
