import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import A from '../ExternalLink';

const StyledFooter = styled.footer`
  display: flex;
  margin-top: calc(1rem + 1vh);
  position: relative;

  & > div.nav {
    flex-wrap: wrap;
    justify-content: flex-end;
    position: relative;
  }

  & .copyleft {
    position: absolute;
    width: auto;
    right: 50%;
    left: 50%;

    display: flex;
    justify-content: center;

    white-space: nowrap;
    display: flex;
    gap: 0.25rem;

    &::before, &::after {
      content: "\\2620";
    }
  }

  & .version {
    font-size: 0.8rem;
    font-weight: 300;
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
        <Link to="/changelog" className="version">{process.env.REACT_APP_VERSION || 'v0.1.2.0'}</Link>
      </div>
    </StyledFooter>
  );
};

export default Footer;
