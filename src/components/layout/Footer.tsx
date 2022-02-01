import React from 'react';
import styled from 'styled-components';
import A from '../A';

const StyledFooter = styled.footer`
  text-align: center;

  & a {
    opacity: 0.5;
    transition: opacity 0.15s;

    display: flex;
    gap: 0.25rem;
    align-items: center;

    margin-top: 3rem;

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
