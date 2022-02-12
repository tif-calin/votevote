import React from 'react';
import styled from 'styled-components';

const Roster = styled.fieldset`
  border: none;
  border-top: 1px solid hsl(var(--shadow-color));
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  padding-bottom: 0.25rem;
  margin: 0;

  & legend {
    padding-right: 0.5rem;
    text-transform: capitalize;
  }

  & :is(select, button) {
    min-width: 3rem;

    &:is(select) {
      flex-grow: 2;
    }

    &:is(button) {
      flex-grow: 0;
    }
  }

  & > output {
    width: 100%;
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  & button.symbol {
    padding: 0;
    padding-top: 0.2rem;
    min-width: unset;
    width: 1.5rem;
    height: calc(1rem + 2 * 0.15rem);
    line-height: 1;
    vertical-align: sub;
    color: rgba(var(--color-black-rgb), 0.95);
  }
`;

interface Props {
  children: React.ReactNode;
  options: string[];
  name: string;
  add: (e?: any) => void;
  clear: (e?: any) => void;
  selected: string;
  setSelected: (str: string) => void;
  selectedN?: number;
  setSelectedN?: (n: number) => void;
};

const RosterControls: React.FC<Props> = ({ children, options, name, add, clear, selected, setSelected, selectedN, setSelectedN }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  return (
    <Roster name={name} onSubmit={e => e.preventDefault()}>
      <legend>{name}</legend>
      <button 
        className="symbol"
        onClick={() => setSelected(options[Math.floor(Math.random() * options.length)])}
      >&#x1f500;&#xFE0E;</button>
      <select 
        name={name}
        value={selected}
        onChange={handleSelect}
      >
        {options.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      {setSelectedN ? (
        <input 
          type="number"
          value={selectedN}
          onChange={e => setSelectedN(parseInt(e.target.value))}
        />
      ) : null}
      <button onClick={add}>add</button>
      <button onClick={clear}>clear</button>
      <output>
        {children}
      </output>
    </Roster>
  );
};

export default React.memo(RosterControls);
