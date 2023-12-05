import React from 'react';
import styled from 'styled-components';
import xkcd from '../data/xkcd';

interface Props {
  name: string;
};

const Container = styled.div`
  --color: ${props => xkcd[props.color || '']?.hex || 'var(--color-black)'};
  
  display: flex inline;
    place-items: center;
    place-content: center;
  padding: 0.05rem 0.15rem;
  user-select: none;
  
  &:hover {
    background: var(--color);
    border-radius: 0.15rem;

    & > span { color: var(--color-black); }
  }

  & > span {
    color: var(--color);
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0;
  }
`;

const ColorName = ({ name }: Props): React.ReactElement => {
  return (
    <Container
      color={name}
    >
      <span>{name}</span>
    </Container>
  );
};

export default ColorName;
