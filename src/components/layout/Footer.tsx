import React from 'react';
import styled from 'styled-components';
import A from '../A';

const StyledFooter = styled.footer`
  display: flex;
  margin-top: calc(1rem + 1vh);
  position: relative;

  & > div.nav {
    justify-content: right;
    position: relative;
  }

  & .copyleft {
    display: flex;
    position: absolute;
    gap: 0.25rem;
    left: 50%;

    &::before, &::after {
      content: "\\2620";
    }
  }

  & .version, & .copyleft {
    opacity: 0.5;
    transition: opacity 0.1s;

    &:hover { opacity: 1; }
  }
`;

interface Props {};

const Footer: React.FC<Props> = () => {
  return (
    <StyledFooter>
      <div className="nav">
        <A 
          className="copyleft"
          href="https://github.com/tif-calin/votevote/"
        >steal this</A>
        <span className="version">v0.1.0.0</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
