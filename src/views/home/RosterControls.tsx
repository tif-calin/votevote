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
  }
`;

interface Props {
  children: React.ReactNode;
  options: string[];
  name: string;
  add: (e: any) => void;
  remove: (str: string) => void;
  clear: () => void;
  selected: string;
  setSelected: (str: string) => void;
};

const RosterControls: React.FC<Props> = ({ children, options, name, add, remove, clear, selected, setSelected }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  return (
    <Roster name={name} onSubmit={e => e.preventDefault()}>
      <legend>{name}</legend>
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
      <button name={name} onClick={add}>add</button>
      <button name={name} onClick={clear}>clear</button>
      <output>
        {children}
      </output>
    </Roster>
  );
};

export default React.memo(RosterControls);
