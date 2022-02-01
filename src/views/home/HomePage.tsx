import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  background: #efefef;
`;

interface Props {};

const HomePage: React.FC<Props> = () => {
  return (
    <Page>
      This is the home page
    </Page>
  );
};

export default HomePage;
