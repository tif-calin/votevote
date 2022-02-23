import React from 'react';
import styled from 'styled-components';
import { ResultFull } from '../../services/voting/SuperElection';
import ContingencyBlock from './blocks/ContingencyBlock';
import { MemoizedIRVBlock } from './blocks/IRVBlock';
import PluralityBlock from './blocks/PluralityBlock';
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
      />
      <ContingencyBlock
        data={data}
      />
      <MemoizedIRVBlock
        data={data}
      />
      <StaticBlock
        title="Positional"
        methods={['borda', 'nauru', 'eurovision', 'dabagh']}
        results={dataFull}
      />
      <StaticBlock
        title="Approval"
        methods={['approval', 'combined_approval']}
        results={dataFull}
      />
    </Container>
  );
};

const MemoizedOutputRight = React.memo(OutputRight);

export default OutputRight;
export { MemoizedOutputRight };
