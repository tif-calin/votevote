import React from 'react';
import styled from 'styled-components';
import xkcd from '../../../data/xkcd';
import type { VoterBallots } from '../../../hooks/useElection';
import useRoster, { useWeightedRoster } from '../../../hooks/useRoster';
import ColorBox from './ColorBox';
import RosterControls from './RosterControls';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  // & > h2 {
  //   margin-bottom: -0.5rem;
  //   width: 100%;
  //   text-align: center;
  // }

  & > *:not(h2) {
    padding: var(--padding);
  }

  min-width: 200px;
  max-width: 36rem;
  flex-basis: 35%;
  flex-grow: 1;
  height: fit-content;

  gap: var(--padding);

  @media (min-width: 693px) {
    position: sticky; 
    top: var(--padding);
  }
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 36rem;
  flex-basis: 35%;
  flex-grow: 1;
  height: fit-content;

  gap: var(--padding);

  & > h3 { margin-bottom: -1rem; }

  & > span.warning {
    line-height: 1.25;
    font-size: 0.8rem;
  }
`;

const CandidateDisplay = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const VoterDisplay = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 0;
  list-style: none;
  gap: 0.25rem;

  margin: calc(var(--padding) / 2);

  & > li {
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > span[title] {
      // white-space: nowrap;
      // max-width: calc(200px - 7.75rem);
      // text-overflow: ellipsis;
      // overflow: hidden;
      max-height: 1.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: help;
    }

    & > *:last-child {
      margin-left: auto;
    }

    @supports selector(::-webkit-textfield-decoration-container) {
      & input[type="number"] {
        text-align: right;
        backdrop-filter: none;
        border: none;
  
        &::-webkit-textfield-decoration-container {
          flex-direction: row-reverse;
        }
      }
    }
  }
`;

interface Props {
  elect: (candidates: string[], voters: Record<string, number>) => void;
  auto?: boolean;
  ballots: VoterBallots;
  children?: React.ReactNode;
};

const initialCandidates = [
  // 'azure', 'lemon', 'coral', 'periwinkle', 'seafoam',
  'azure', 'celadon', 'manilla', 'orange', 'pink'
  // 'amethyst', 'azure', 'beige', 'blush', 'bubblegum', 'canary', 'coral', 'cream', 'lavender', 'lemon', 'lime', 'manilla', 'melon', 'mint', 'orange', 'peach', 'pink', 'pistachio', 'rose', 'seafoam',
];
const initialVoters = Object.keys(xkcd).slice(-24).reduce((a, c) => ({ ...a, [c]: c.length }), {});
const colorList = Object.keys(xkcd).sort();

const formatVoterPreferences = (ballot?: Record<string, number>) => {
  if (ballot) {
    return Object.entries(ballot).sort((a, b) => b[1] - a[1]).map(([c, s]) => {
      return `${(Number(s) * 100).toFixed(1)}% - ${c}`;
    }).join('\n');
  } else return '';
};

const InputLeft: React.FC<Props> = ({ 
  elect, auto = true, ballots, children
}) => {
  ballots ||= {};

  const { 
    roster: candidates,
    reset: resetCandidates,
    add: addCandidate,
    clear: clearCandidates,
    remove: removeCandidate,
    selected: selectedCandidate,
    setSelected: setSelectedCandidate,
  } = useRoster(initialCandidates, 'amber');

  const candidateOptions = React.useMemo(() => {
    return colorList.filter(c => !candidates.includes(c));
  }, [candidates]);

  const handleAddCandidate = React.useCallback((_: React.FormEvent<HTMLFormElement>) => {
    addCandidate();
    setSelectedCandidate(candidateOptions.find((_, i, arr) => arr[i - 1] === selectedCandidate) || '');
  }, [addCandidate, candidateOptions, selectedCandidate, setSelectedCandidate]);

  const handleResetCandidates = React.useCallback(() => {
    resetCandidates(initialCandidates);
  }, [resetCandidates]);

  const {
    roster: voters,
    add: addVoter,
    remove: removeVoter,
    reset: resetVoters,
    clear: clearVoters,
    setN: setVoterN,
    selected: selectedVoter,
    setSelected: setSelectedVoter,
    selectedN: selectedVoterN,
    setSelectedN: setSelectedVoterN,
  } = useWeightedRoster(initialVoters, 'amber');
  
  const voterOptions = React.useMemo(
    () => colorList.filter(v => !Object.keys(voters).includes(v)),
    [voters]
  );

  const handleAddVoter = React.useCallback(() => {
    addVoter();
    setSelectedVoter(voterOptions.find((_, i, arr) => arr[i - 1] === selectedVoter) || '');  
  }, [addVoter, selectedVoter, setSelectedVoter, voterOptions]);

  const handleResetVoters = React.useCallback(() => {
    resetVoters(initialVoters);
  }, [resetVoters]);

  React.useEffect(() => {
    if (auto) elect(candidates, voters);
  }, [auto, candidates, voters, elect]);

  return (
    <Wrapper>
      {/* <h2>Input</h2> */}
      <Container
        onSubmit={e => e.preventDefault()}
        className="island"
      >
        {!auto && <span className="warning">
          That's a lot of candidates! To update the charts, please use the button at the bottom.
        </span>}
        <RosterControls
          options={candidateOptions}
          name="candidates"
          add={handleAddCandidate}
          reset={handleResetCandidates}
          clear={clearCandidates}
          selected={selectedCandidate}
          setSelected={setSelectedCandidate}
          count={candidates.length}
        >
          <CandidateDisplay>
            {candidates.map((color) => (
              <ColorBox
                key={`${color}-candidate`} 
                aria-label={`Remove ${color} from the list of candidates`}
                color={color}
                onColorClick={removeCandidate}
              />
            ))}
          </CandidateDisplay>
        </RosterControls>

        <RosterControls
          options={voterOptions}
          name="voters"
          add={handleAddVoter}
          reset={handleResetVoters}
          clear={clearVoters}
          selected={selectedVoter}
          setSelected={setSelectedVoter}
          selectedN={selectedVoterN}
          setSelectedN={setSelectedVoterN}
          count={Object.values(voters)?.reduce((a, v) => a+v, 0)}
        >
          <VoterDisplay>
            {Object.keys(voters).reverse().map((voter) => {
              return (
                <li key={voter}>
                  <ColorBox
                    color={voter}
                    onColorClick={removeVoter}
                  />
                  <span 
                    title={`${voter}\n---\n` + formatVoterPreferences(ballots?.[voter]?.ballot)}
                  >{voter}</span>
                  <input 
                    type="number" 
                    value={voters[voter]} 
                    onChange={({ target }) => setVoterN(voter, Number(target.value) || 0)} 
                  />
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
      {children}
    </Wrapper>
  );
};

const MemoizedInputLeft = React.memo(InputLeft);

export default InputLeft;
export { MemoizedInputLeft };
