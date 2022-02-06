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
`;

interface Props {
  children: React.ReactNode;
  options: string[];
  name: string;
};

const RosterControls: React.FC<Props> = ({ children, options, name }) => {
  return (
    <Roster name={name}>
      <legend>{name}</legend>
      <select name={name}>
        {options.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <button name={name}>add</button>
      <button name={name}>clear</button>
      <output>
        {children}
      </output>
    </Roster>
  );
};

export default React.memo(RosterControls);
