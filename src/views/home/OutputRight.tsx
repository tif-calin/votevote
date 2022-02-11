import React from 'react';
import styled from 'styled-components';
import PluralityBlock from './blocks/PluralityBlock';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex-basis: 55%;
  flex-grow: 1;
  padding: var(--padding);
`;

interface Props {
  data: any
};

const OutputRight: React.FC<Props> = ({ data }) => {
  const dataPlurality = React.useMemo(() => {
    const { fptp, veto, signed } = data || {};
    return { fptp, veto, signed };
  }, [data]);

  return (
    <Container>
      <PluralityBlock 
        data={dataPlurality}
      />
    </Container>
  );
};

export default OutputRight;
