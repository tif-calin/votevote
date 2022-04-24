import React from 'react';
import styled from 'styled-components';
import xkcd from '../data/xkcd';

interface Props {
  name: string;
};

const Container = styled.div`
  --color: ${props => xkcd[props.color || '']?.hex || 'var(--color-black)'};
  display: flex;
  place-items: center;
  place-content: center;
  padding: 0.05rem 0.15rem;
  
  &:hover {
    border-radius: 0.15rem;
    background: var(--color);
    & > span { color: var(--color-black); }
  }

  & > span {
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0;
    color: var(--color);
  }
`;

const ColorName: React.FC<Props> = ({ name }) => {
  return (
    <Container
      color={name}
    >
      <span>{name}</span>
    </Container>
  );
};

export default ColorName;
