import React from 'react';
import styled from 'styled-components';
import xkcd from '../../data/xkcd';
import useRoster, { useWeightedRoster } from '../../hooks/useRoster';
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

  height: fit-content;
`;

const Candidate = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  transition: all 0.1s;
  overflow: hidden;
  border: 1px solid hsl(var(--shadow-color));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & span {
    width: 100%;
    color: var(--color-white);
    font-weight: 900;
    opacity: 0;
    backdrop-filter: contrast(0.25);
  }
`;

const CandidateDisplay = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;

  & > div {
    cursor: pointer;

    &:hover {
      border: none;
      & span { opacity: 1; }
    }
  }
`;

const VoterDisplay = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  list-style: none;
  gap: 0.25rem;

  & > li {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > *:last-child {
      margin-left: auto;
    }
  }
`;

interface Props {
  elect: (candidates: string[], voters: { [key: string]: number }) => void;
};

// const top60 = Object.keys(xkcd).slice(-60);
const initialCandidates = [
  'azure', 'lemon', 'coral', 'periwinkle', 'seafoam'
  // 'amethyst', 'azure', 'beige', 'blush', 'coral', 'lavender', 'lemon', 'melon', 'orange', 'pink', 'rose', 'peach', 'lime', 'mint', 'seafoam', 'cream', 'pistachio',
];
const top16 = Object.keys(xkcd).slice(-16);
const colorList = Object.keys(xkcd).sort();

const preventDefault = (fnc: any) => (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  fnc();
};

const InputLeft: React.FC<Props> = ({ elect }) => {
  const { 
    roster: candidates,
    add: addCandidate,
    clear: clearCandidates,
    remove: removeCandidate,
    selected: selectedCandidate,
    setSelected: setSelectedCandidate,
  } = useRoster(initialCandidates, 'acid green');

  const handleAddCandidate = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCandidate();
    setSelectedCandidate(colorList.find((_, i, arr) => arr[i - 1] === selectedCandidate) || '');
  }, [addCandidate, selectedCandidate, setSelectedCandidate]);

  const {
    roster: voters,
    add: addVoter,
    clear: clearVoters,
    // setN: setVoterN,
    selected: selectedVoter,
    setSelected: setSelectedVoter,
    selectedN, 
    setSelectedN,
  } = useWeightedRoster(top16.reduce((a, c) => ({ ...a, [c]: c.length }), {}), 'acid green');

  return (
    <StyledForm
      onSubmit={e => e.preventDefault()}
      className="island"
    >
      <RosterControls
        options={colorList.filter(c => !candidates.includes(c))}
        name="candidates"
        add={handleAddCandidate}
        clear={preventDefault(clearCandidates)}
        selected={selectedCandidate}
        setSelected={setSelectedCandidate}
        count={candidates.length}
      >
        <CandidateDisplay>
          {candidates.map((color) => (
            <Candidate
              key={`${color}-candidate`} title={color}
              onClick={() => removeCandidate(color)}
              style={{
                backgroundColor: xkcd[color as keyof typeof xkcd].hex,
              }}
            >
              <span>x</span>
            </Candidate>
          ))}
        </CandidateDisplay>
      </RosterControls>

      <RosterControls
        options={colorList}
        name="voters"
        add={preventDefault(addVoter)}
        clear={preventDefault(clearVoters)}
        selected={selectedVoter}
        setSelected={setSelectedVoter}
        selectedN={selectedN}
        setSelectedN={setSelectedN}
        count={Object.values(voters).reduce((a, v) => a+v)}
      >
        <VoterDisplay>
          {Object.keys(voters).map((voter) => {
            return (
              <li key={voter}>
                <Candidate style={{ backgroundColor: xkcd[voter as keyof typeof xkcd].hex }}/>
                <span>{voter}</span>
                <span>{voters[voter]}</span>
              </li>
            );
          })}
        </VoterDisplay>
      </RosterControls>

      <button 
        type="submit" 
        onClick={() => elect(candidates, voters)}
      >Do the thing!</button>
    </StyledForm>
  );
};

export default InputLeft;
