import React from 'react';

interface Props {};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
