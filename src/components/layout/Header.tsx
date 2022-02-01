import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RainbowText from '../RainbowText';

const StyledHeader = styled.header`
  text-align: center;
  display: flex;

  & h1 {
    font-size: 2.5rem;
    filter: saturate(0.55) brightness(0.25);
    transition: all 2s cubic-bezier(0, 0.9, 0.8, 0.99);

    &:hover {
      filter: saturate(1) brightness(1) hue-rotate(1440deg);
    }
  }
`;

interface Props {};

const Header: React.FC<Props> = () => {
  return (
    <StyledHeader>
      <Link to="/"><h1><RainbowText text="votevote" /></h1></Link>
    </StyledHeader>
  );
};

export default Header;
