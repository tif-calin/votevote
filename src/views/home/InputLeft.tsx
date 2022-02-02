import React from 'react';
import xkcd from '../../data/xkcd';

interface Props {};

const InputLeft: React.FC<Props> = () => {
  return (
    <form>
      <select>
        {Object.keys(xkcd).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
    </form>
  );
};

export default InputLeft;
