import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RainbowText from '../RainbowText';

const StyledHeader = styled.header`
  & h1 {
    text-align: center;
    max-width: 100%;
    font-size: 2.5rem;
    filter: saturate(0.55) brightness(0.25);
    transition: filter 2s cubic-bezier(0, 0.9, 0.8, 0.99);

    &:hover {
      filter: saturate(1) brightness(1);

      & > span {
        filter: hue-rotate(1440deg);
      }
    }
  }
`;

interface Props {};

const Header: React.FC<Props> = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>
          <RainbowText text="VoteVote" />
        </h1>
      </Link>
    </StyledHeader>
  );
};

export default Header;
