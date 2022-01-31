import React from 'react';

interface Props {}

const A: React.FC<Props> = ({ children, ...props }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default A;
