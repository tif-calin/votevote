import React from 'react';
import styled from 'styled-components';

const Explanation = styled.details`
  font-size: 0.8rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  border: 1px solid #0000; 
  border-radius: 0.15rem;

  &[open] {
    border-color: hsl(var(--shadow-color));

    & summary { 
      border-bottom: 1px solid hsl(var(--shadow-color)); 
      padding-bottom: 0.25rem;
      margin-bottom: 0.25rem;
    }

    & p {
    }
  }
`;

interface Props {
  explanation?: string;
};

const BlockBottom: React.FC<Props> = ({ explanation }) => {

  if (!explanation) return null;
  else return (
    <Explanation>
      <summary>Explanation</summary>
      {explanation}
    </Explanation>
  );
};

export default BlockBottom;
