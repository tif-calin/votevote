import React from 'react';
import styled from 'styled-components';

const CollapsibleLegend = styled.legend<{ collapsed?: boolean }>`    padding-right: 0.5rem;
  text-transform: capitalize;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  user-select: none;

  & > span.symbol {
    display: none;
    font-size: 0.5rem;
    transform: rotate(${props => props.collapsed ? 0 : -180}deg);
    opacity: 0.5;
    transition-property: transform, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
  }

  &:where(:hover, :focus) > span.symbol { 
    opacity: 1;
    transform: rotate(${props => props.collapsed ? -180 : 0}deg); 
  }
`;

const Roster = styled.fieldset`
  border: none;
  border-top: 1px solid hsl(var(--shadow-color));
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  height: 100%;
  position: relative;

  & :is(select, button) {
    min-width: 3rem;

    &:is(select) { flex-grow: 2; }
    &:is(button) { flex-grow: 0; }
  }

  & > output {
    width: 100%;
    border-radius: 0.15rem;

    max-height: calc(6rem + 40vh);
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
    &:where(:hover, :focus) {
      background-color: var(--oc-pink-4);
      color: var(--color-white);
      border-color: transparent;
    }
  }

  & > .message {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;

    font-size: 0.8rem;
    font-weight: 350;
    line-height: 1;

    & > span:first-child {
      flex-grow: 1;
      white-space: nowrap;
    }
    & > span:last-child {
      opacity: 0;
      text-align: right;
    }
  }

  &:where(:hover, :focus-within) > .message > span:last-child { opacity: 1; }
  &:where(:hover, :focus-within) > legend > span.symbol { display: inline-block; }
`;

const CollapsedTotal = styled.span`
  position: absolute;
  right: 0;
  bottom: 100%;
  background-color: var(--color-white);
  padding-left: 0.5rem;
  font-weight: 350;
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

const clickKeys = new Set(['Enter', ' ']);
const keyCapturify = (fnc: (e?: any) => void): React.KeyboardEventHandler => 
  e => clickKeys.has(e?.key) ? fnc(e) : undefined
;

const RosterControls: React.FC<Props> = ({ 
  count, children, options, name, add, reset, clear, 
  selected, setSelected, selectedN, setSelectedN 
}) => {
  const [controlMessage, setControlMessage] = React.useState<string>('');
  const resetMessage = () => setControlMessage('');

  const [expanded, toggleExpanded] = React.useReducer((state: boolean) => !state, true);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  return (
    <Roster 
      name={name} 
      onSubmit={e => e.preventDefault()}
    >
      <CollapsibleLegend
        collapsed={!expanded}
        onClick={toggleExpanded}
        onKeyDownCapture={keyCapturify(toggleExpanded)}
        role="button"
        tabIndex={0}
      >
        {name}
        {' '}
        <span className="symbol">&#x1F53D;</span>
      </CollapsibleLegend>
        <>
          <button 
            className="symbol"
            aria-label="Select a random option"
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
            aria-label={`Add ${selected} to the roster`}
            onClick={add}
            onMouseEnter={() => setControlMessage(`Add ${selected} to the roster`)}
            // onBlur={resetMessage}
            // onFocus={() => setControlMessage(`Add ${selected} to the roster`)}
            onMouseLeave={resetMessage}
          >&#x2795;</button>
          {reset && <button
            className="symbol"
            aria-label="Reset the roster to preset"
            onClick={reset}
            onMouseEnter={() => setControlMessage(`Reset the roster to preset`)}
            onMouseLeave={resetMessage}
          >&#x21ba;</button>}
          <button 
            className="symbol"
            aria-label="Clear the entire roster"
            onClick={clear}
            onMouseEnter={() => setControlMessage(`Clear the entire roster`)}
            onMouseLeave={resetMessage}
          >&#x2716;</button>
          {expanded && (
            <>
              <div className="message" role="status">
                <span>{count?.toLocaleString() || 0} total</span>
                <span>{controlMessage || ''}</span>
              </div>
              <output>{children}</output>
            </>
          )}
        </>
        {!expanded && <CollapsedTotal>{count?.toLocaleString() || 0} total</CollapsedTotal>}
    </Roster>
  );
};

export default React.memo(RosterControls);
