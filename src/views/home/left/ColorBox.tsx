import React from 'react';
import styled from 'styled-components';
import xkcd from '../../../data/xkcd';

const Container = styled.div<{
  color: string;
}>`
  display: flex;
    align-items: center;
    justify-content: center;
  height: 1.25rem;
  min-width: 1.25rem;
  overflow: hidden;
  text-align: center;
  width: 1.25rem;

  background-color: ${props => xkcd[props.color]?.hex || 'transparent'};
  border: 1px solid hsl(var(--shadow-color));
  border-radius: 0.25rem;

  cursor: pointer;
  transition: border 0.1s;

  & span {
    width: 100%;
    backdrop-filter: contrast(0.25);
    color: var(--color-white);
    font-weight: 700;
    opacity: 0;
  }

  &:hover {
    border: none;

    & span { opacity: 1; }
  }
`;

interface Props {
  color: string;
  onClick?: (color: string) => void;
};

const ColorBox = ({ 
  color, 
  onClick, 
  ...props 
}: Props): React.ReactElement => {
  const handleClick = React.useCallback(() => onClick?.(color), [color, onClick]);

  return (
    <Container
      title={color}
      role="button"
      color={color}
      onClick={handleClick}
      {...props}
    >
      <span aria-hidden>x</span>
    </Container>
  );
};

export default ColorBox;
