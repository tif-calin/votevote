import React from 'react';
import styled from 'styled-components';

const Explanation = styled.details`
  font-size: 0.8rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  padding-bottom: 0;
  border: 1px solid #0000; 
  border-radius: 0.15rem;

  & p { 
    color: #0000;
    transition: color 0.1s;
  }

  &[open] {
    border-color: hsl(var(--shadow-color));
    padding-bottom: 0.5rem;

    & summary { 
      border-bottom: 1px solid hsl(var(--shadow-color)); 
      padding-bottom: 0.25rem;
      margin-bottom: 0.5rem;
    }

    & p {
      color: inherit;
    }
  }
`;

interface Props {
  explanation?: string;
  explanationDefaultsOpen?: boolean;
};

const BlockBottom: React.FC<Props> = ({ 
  explanation,
  explanationDefaultsOpen = false,
 }) => {
  if (!explanation) return null;
  else return (
    <Explanation
      open={explanationDefaultsOpen}
    >
      <summary>Explanation</summary>
      <p>{explanation}</p>
    </Explanation>
  );
};

export default BlockBottom;
