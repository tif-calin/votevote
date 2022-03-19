import React from 'react';
import styled from 'styled-components';
import BlockBottom from './BlockBottom';
import BlockMiddle from './BlockMiddle';
import { MemoizedBlockTop } from './BlockTop';

interface Props {
  title: string;
  info: { [key: string]: { 
    explanation?: string,
    visualization?: React.FC<any>,
    name?: string,
  } };
  round?: number;
  method: string;
  setMethod: (method: string) => void;
  winners?: string[];
  isPaused?: boolean;
  handlePause?: () => void;
  explanationDefaultsOpen?: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--padding) / 2);
  padding: var(--padding);
`;

const Block: React.FC<Props> = ({ 
  title, info, round, winners = [],
  method, setMethod,
  isPaused = false, handlePause,
  children,
  explanationDefaultsOpen = false,
}) => {
  const options = React.useMemo(() => {
    return Object.keys(info);
  }, [info]);
  const explanation = React.useMemo(() => {
    return info?.[method]?.explanation || '';
  }, [info, method]);

  return (
    <Container className="island">
      <MemoizedBlockTop
        title={title}
        subtitle={info?.[method]?.name}
        options={options}
        selected={method}
        setSelected={setMethod}
        round={round}
        winners={winners}
        isPaused={isPaused}
        handlePause={handlePause}
      />

      <BlockMiddle>{children}</BlockMiddle>

      <BlockBottom
        explanation={explanation}
        explanationDefaultsOpen={explanationDefaultsOpen}
      />
    </Container>
  );
};

export default Block;
