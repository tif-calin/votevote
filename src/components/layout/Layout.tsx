import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100vw;
  overflow-y: overlay;

  & > * {
    padding: 0.5rem;
    width: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > header, & > footer {
    flex-grow: 0;
  }

  & > main {
    flex-grow: 1;
  }
`;

interface Props {};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
