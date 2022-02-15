import React from 'react';
import styled from 'styled-components';
import xkcd from '../../data/xkcd';
import useRoster, { useWeightedRoster } from '../../hooks/useRoster';
import RosterControls from './RosterControls';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  min-height: calc(100px + 5vh);
  min-width: 200px;
  flex-basis: 35%;
  flex-grow: 1;
  padding: var(--padding);
  gap: var(--padding);

  height: fit-content;

  & > span.warning {
    line-height: 1.25;
    font-size: 0.8rem;
  }
`;

const ColorBox = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  transition: border 0.1s;
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

    & input[type="number"] {
      text-align: right;
      backdrop-filter: none;

      &::-webkit-textfield-decoration-container {
        flex-direction: row-reverse;
      }
    }
  }
`;

interface Props {
  elect: (candidates: string[], voters: { [key: string]: number }) => void;
  auto?: boolean;
};

const initialCandidates = [
  'azure', 'lemon', 'coral', 'periwinkle', 'seafoam'
  // 'amethyst', 'azure', 'beige', 'blush', 'canary', 'coral', 'cream', 'lavender', 'lemon', 'lime', 'melon', 'mint', 'orange', 'peach', 'pink', 'pistachio', 'rose', 'seafoam',
];
const top16 = Object.keys(xkcd).slice(-16).reduce((a, c) => ({ ...a, [c]: c.length }), {});
const colorList = Object.keys(xkcd).sort();

const preventDefault = (fnc: any) => (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  fnc();
};

const InputLeft: React.FC<Props> = ({ 
  elect, auto = true
}) => {
  const { 
    roster: candidates,
    reset: resetCandidates,
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

  const handleResetCandidates = React.useCallback(() => {
    resetCandidates(initialCandidates);
  }, [resetCandidates]);

  const {
    roster: voters,
    add: addVoter,
    reset: resetVoters,
    clear: clearVoters,
    setN: setVoterN,
    selected: selectedVoter,
    setSelected: setSelectedVoter,
    selectedN: selectedVoterN,
    setSelectedN: setSelectedVoterN,
  } = useWeightedRoster(top16, 'acid green');

  const handleResetVoters = React.useCallback(() => {
    resetVoters(top16);
  }, [resetVoters]);

  React.useEffect(() => {
    if (auto) elect(candidates, voters);
  }, [auto, candidates, voters, elect]);

  return (
    <Container
      onSubmit={e => e.preventDefault()}
      className="island"
    >
      {!auto && <span className="warning">
        That's a lot of candidates! To update the charts, please use the button at the bottom.
      </span>}
      <RosterControls
        options={colorList.filter(c => !candidates.includes(c))}
        name="candidates"
        add={handleAddCandidate}
        reset={handleResetCandidates}
        clear={preventDefault(clearCandidates)}
        selected={selectedCandidate}
        setSelected={setSelectedCandidate}
        count={candidates.length}
      >
        <CandidateDisplay>
          {candidates.map((color) => (
            <ColorBox
              key={`${color}-candidate`} title={color}
              onClick={() => removeCandidate(color)}
              style={{
                backgroundColor: xkcd[color as keyof typeof xkcd].hex,
              }}
            >
              <span>x</span>
            </ColorBox>
          ))}
        </CandidateDisplay>
      </RosterControls>

      <RosterControls
        options={colorList}
        name="voters"
        add={preventDefault(addVoter)}
        reset={preventDefault(handleResetVoters)}
        clear={preventDefault(clearVoters)}
        selected={selectedVoter}
        setSelected={setSelectedVoter}
        selectedN={selectedVoterN}
        setSelectedN={setSelectedVoterN}
        count={Object.values(voters)?.reduce((a, v) => a+v, 0)}
      >
        <VoterDisplay>
          {Object.keys(voters).map((voter) => {
            return (
              <li key={voter}>
                <ColorBox style={{ backgroundColor: xkcd[voter as keyof typeof xkcd].hex }} />
                <span>{voter}</span>
                {/* <span>{voters[voter]}</span> */}
                <input type="number" defaultValue={voters[voter]} onChange={({ target }) => setVoterN(voter, Number(target.value) || 0)} />
              </li>
            );
          })}
        </VoterDisplay>
      </RosterControls>

      {!auto && <button 
        type="submit" 
        onClick={() => elect(candidates, voters)}
      >Do the thing!</button>}
    </Container>
  );
};

const MemoizedInputLeft = React.memo(InputLeft);

export default InputLeft;
export { MemoizedInputLeft };
