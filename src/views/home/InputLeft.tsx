import React from 'react';
import styled from 'styled-components';
import xkcd from '../../data/xkcd';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: calc(100px + 5vh);
  min-width: 200px;
  flex-basis: 35%;
  flex-grow: 1;
  padding: var(--padding);

  & > fieldset {
    border: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    margin: 0;

    & :is(select, button) {
      min-width: 3rem;

      &:is(select) {
        flex-grow: 2;
      }

      &:is(button) {
        flex-grow: 0;
      }
    }
  }
`;

interface Props {};

const top60 = Object.keys(xkcd).slice(-60);
const colorList = Object.keys(xkcd).sort();

console.log(top60);

const InputLeft: React.FC<Props> = () => {
  return (
    <StyledForm>
      <fieldset>
        <legend>Candidates</legend>
        <select>
          {colorList.map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
        <button>add</button>
        <button>clear</button>
      </fieldset>
    </StyledForm>
  );
};

export default InputLeft;
