import React from 'react';
import styled from 'styled-components';
import xkcd from '../../data/xkcd';
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

const top60 = Object.keys(xkcd).slice(-60);
const colorList = Object.keys(xkcd).sort();

const InputLeft: React.FC<Props> = () => {
  return (
    <StyledForm>
      <RosterControls
        options={colorList}
        name="candidates"
      >
      </RosterControls>

      <RosterControls
        options={colorList}
        name="voters"
      >
      </RosterControls>
    </StyledForm>
  );
};

export default InputLeft;
