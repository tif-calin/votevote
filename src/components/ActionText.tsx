import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  mt?: string;
  onClick: () => void;
  className?: string;
};

const Container = styled.span<{
  mt?: string;
}>`
  color: var(--oc-pink-3);
  cursor: pointer;
  margin-top: ${({ mt }) => mt || 'var(--padding)'};
`;

const ActionText = ({
  className,
  label,
  mt,
  onClick,
  ...props
}: Props) => {
  return (
    <Container
      {...props}
      className={`action-text ${className}`}
      mt={mt}
      onClick={onClick}
    >
      {label}
    </Container>
  );
};

export default ActionText;
