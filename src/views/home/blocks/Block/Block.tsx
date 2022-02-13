import React from 'react';
import styled from 'styled-components';
import BlockBottom from './BlockBottom';
import BlockMiddle from './BlockMiddle';
import BlockTop from './BlockTop';

interface Props {
  title: string;
  info: { [key: string]: { 
    explanation?: string,
    visualization?: React.FC<any>,
  } };
  method: string;
  setMethod: (method: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--padding) / 2);
  padding: var(--padding);
`;

const Block: React.FC<Props> = ({ 
  title, info,
  method, setMethod,
  children
}) => {
  const options = React.useMemo(() => {
    return Object.keys(info);
  }, [info]);
  const explanation = React.useMemo(() => {
    return info?.[method]?.explanation || '';
  }, [info, method]);

  return (
    <Container className="island">
      <BlockTop
        title={title}
        options={options}
        selected={method}
        setSelected={setMethod}
      />

      <BlockMiddle>{children}</BlockMiddle>

      <BlockBottom
        explanation={explanation}
      />
    </Container>
  );
};

export default Block;
