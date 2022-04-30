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
  height: 100%;

  & legend {
    padding-right: 0.5rem;
    text-transform: capitalize;
  }

  & :is(select, button) {
    min-width: 3rem;

    &:is(select) { flex-grow: 2; }
    &:is(button) { flex-grow: 0; }
  }

  & > output {
    width: 100%;
    border-radius: 0.15rem;

    max-height: calc(6rem + 50vh);
    overflow-y: auto;
    @supports (scrollbar-width: none) {
      scrollbar-width: none;
    }
    @supports selector(::-webkit-scrollbar) {
      overflow-y: overlay;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    background:
      linear-gradient(var(--color-white) 30%, #fff0),
      linear-gradient(#fff0, var(--color-white) 70%) 0 100%,
      radial-gradient(farthest-side at 0 0, rgba(var(--color-black-rgb), 0.1), #0000),
      radial-gradient(farthest-side at 0 100%, rgba(var(--color-black-rgb), 0.1), #0000) 0 100%
    ;
    background-repeat: no-repeat;
    background-size: 100% 3rem, 100% 3rem, 200% 1rem, 200% 1rem;
    background-attachment: local, local, scroll, scroll;
  }

  & button.symbol {
    min-width: unset;
    width: 1.5rem;
    color: rgba(var(--color-black-rgb), 0.8);
    font-family: "VoteVote Symbol";

    transition-property: color, background-color, border-color;
    transition-duration: 0.1s;
    &:hover {
      background-color: var(--oc-pink-4);
      color: var(--color-white);
      border-color: transparent;
    }
  }

  & > .message {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    font-weight: 350;
    line-height: 1;

    & > span:last-child {
      opacity: 0;
    }
  }

  &:hover > .message > span:last-child { opacity: 1; }
`;

interface Props {
  children: React.ReactNode;
  options: string[];
  name: string;
  add: (e?: any) => void;
  reset?: (e?: any) => void;
  clear: (e?: any) => void;
  selected: string;
  setSelected: (str: string) => void;
  selectedN?: number;
  setSelectedN?: (n: number) => void;
  count?: number;
};

const RosterControls: React.FC<Props> = ({ count, children, options, name, add, reset, clear, selected, setSelected, selectedN, setSelectedN }) => {
  const [controlMessage, setControlMessage] = React.useState<string>('');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  const resetMessage = () => setControlMessage('');

  return (
    <Roster 
      name={name} 
      onSubmit={e => e.preventDefault()}
    >
      <legend>{name}</legend>
      <button 
        className="symbol"
        onClick={() => setSelected(options[Math.floor(Math.random() * options.length)])}
        onMouseEnter={() => setControlMessage('Select a random option')}
        onMouseLeave={resetMessage}
      >&#x1f500;</button>
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
      <button 
        className="symbol"
        onClick={add}
        onMouseEnter={() => setControlMessage(`Add ${selected} to the roster`)}
        onMouseLeave={resetMessage}
      >&#x2795;</button>
      {reset && <button
        className="symbol"
        onClick={reset}
        onMouseEnter={() => setControlMessage(`Reset roster to preset`)}
        onMouseLeave={resetMessage}
      >&#x21ba;</button>}
      <button 
        className="symbol"
        onClick={clear}
        onMouseEnter={() => setControlMessage(`Clear the entire roster`)}
        onMouseLeave={resetMessage}
      >&#x2716;</button>
      <div className="message">
        <span>{count || 0} total</span>
        <span>{controlMessage || ''}</span>
      </div>
      <output>
        {children}
      </output>
    </Roster>
  );
};

export default React.memo(RosterControls);
