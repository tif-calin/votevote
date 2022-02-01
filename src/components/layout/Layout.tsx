import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const StyledLayout = styled.div`
  --padding: 1rem;

  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100vw;
  overflow-y: overlay;

  & > :is(header, main, footer) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      min-width: calc(100px + 60vw);
      width: calc(150px + 40vw);
      max-width: calc(900px + 10vw);
    }
  }

  & > :is(header, footer) {
    padding: var(--padding);
    flex-grow: 0;

    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & > main {
    flex-grow: 1;
    height: 100%;

    & > * { 
      padding: var(--padding);
      flex-grow: 1;
    }
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
