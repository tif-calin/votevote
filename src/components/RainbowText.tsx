import React from 'react';

const colors = [
  'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 
  'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'
];

interface Props {
  text: string;
};

const RainbowText: React.FC<Props> = ({ text }) => {
  return (
    <>
      {text.split('').map((char, i) => (
        <span key={i} style={{ color: `var(--oc-${colors[i % colors.length]}-4)` }}>
          {char}
        </span>
      ))}
    </>
  );
};

export default RainbowText;
