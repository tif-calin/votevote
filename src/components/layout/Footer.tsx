import React from 'react';
import styled from 'styled-components';
import A from '../A';

const StyledFooter = styled.footer`
  & a {
    margin-top: calc(1rem + 1vh);
    gap: 0.25rem;

    opacity: 0.5;
    transition: opacity 0.1s;

    &:hover {
      opacity: 1;
    }

    &::before, &::after {
      content: "\\2620";
    }
  }
`;

interface Props {};

const Footer: React.FC<Props> = () => {
  return (
    <StyledFooter>
      <A href="https://github.com/tif-calin/votevote/" >steal this</A>
    </StyledFooter>
  );
};

export default Footer;
