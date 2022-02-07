import React from 'react';
import styled from 'styled-components';
import xkcd from '../../data/xkcd';
import useRoster/*, { useWeightedRoster }*/ from '../../hooks/useRoster';
import RosterControls from './RosterControls';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: calc(100px + 5vh);
  min-width: 200px;
  flex-basis: 35%;
  flex-grow: 1;
  padding: var(--padding);
  gap: var(--padding);
`;

interface Props {};

// const top60 = Object.keys(xkcd).slice(-60);
// const top12 = Object.keys(xkcd).slice(-12);
const colorList = Object.keys(xkcd).sort();

const preventDefault = (fnc: any) => (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  fnc();
};

const InputLeft: React.FC<Props> = () => {
  const { 
    roster: candidates,
    add: addCandidate,
    clear: clearCandidates,
    remove: removeCandidate,
    selected: selectedCandidate,
    setSelected: setSelectedCandidate,
  } = useRoster(['red', 'green', 'blue'], 'yellow');

  // const {
  //   roster: voters,
  //   add: addVoter,
  //   setN: setVoter,
  // } = useWeightedRoster(top12.reduce((a, c) => ({ ...a, [c]: c.length }), {}), 'yellow');

  return (
    <StyledForm>
      <RosterControls
        options={colorList}
        name="candidates"
        add={preventDefault(addCandidate)}
        clear={clearCandidates}
        remove={removeCandidate}
        selected={selectedCandidate}
        setSelected={setSelectedCandidate}
      >
        {candidates.map((color) => (
          <div
            key={color}
            title={color}
            style={{
              backgroundColor: xkcd[color as keyof typeof xkcd].hex,
              width: '1rem',
              height: '1rem',
            }}
          ></div>
        ))}
      </RosterControls>

      {/* <RosterControls
        options={colorList}
        name="voters"
      >
      </RosterControls> */}
    </StyledForm>
  );
};

export default InputLeft;
