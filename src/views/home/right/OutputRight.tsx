import React from 'react';
import styled from 'styled-components';
import { ResultFull } from '../../../services/voting/SuperElection';
import ContingencyBlock from './blocks/ContingencyBlock';
import { MemoizedIRVBlock } from './blocks/IRVBlock';
import { MemoizedStaticBlock as StaticBlock } from './blocks/StaticBlock';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex-basis: 55%;
  flex-grow: 1;

  gap: var(--padding);
`;

interface Props {
  data: any,
  dataFull: { [method: string]: ResultFull },
};

const OutputRight: React.FC<Props> = ({ data, dataFull }) => {
  return (
    <Container>
      <StaticBlock
        title="Plurality"
        methods={['fptp', 'veto', 'signed', 'vfa']}
        results={dataFull}
        explanationDefaultsOpen={true}
      />
      <ContingencyBlock
        data={data}
      />
      <MemoizedIRVBlock
        data={data}
      />
      <StaticBlock
        title="Condorcet"
        methods={['copeland', 'lull']}
        results={dataFull}
      />
      <StaticBlock
        title="Positional"
        methods={['borda', 'nauru', 'eurovision', 'dabagh', 'binary_positional']}
        results={dataFull}
      />
      <StaticBlock
        title="Evaluative"
        methods={['approval', 'disapproval', 'cav', 'score', 'range']}
        results={dataFull}
      />
      <StaticBlock
        title="Budgetary"
        methods={['cumulative', 'fractional', 'quadratic', 'equal_even']}
        results={dataFull}
      />
    </Container>
  );
};

const MemoizedOutputRight = React.memo(OutputRight);

export default OutputRight;
export { MemoizedOutputRight };
