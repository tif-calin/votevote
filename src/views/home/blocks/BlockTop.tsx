import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > form {
    display: flex;
    align-items: center;

    border: 1px solid hsl(var(--shadow-color));
    border-radius: 0.25rem;

    overflow: hidden;

    & > * {
      display: flex;
      align-items: center;
      cursor: pointer;
      & input { display: none; }
      & span { 
        padding: 0.15rem 0.5rem; 
        transition: all 0.1s;
      }
    }

    & input:checked + span {
      background-color: var(--color-black);
      color: var(--color-white);
    }
  }
`;

interface Props {
  [key: string]: any;
};

const BlockTop: React.FC<Props> = ({ title, options, selected, setSelected }) => {

  return (<>
    <Top>
      <h3>{title}</h3>
      <form name={`${title.toLowerCase()}-options`}>
        {options.map((key: string, i: number) => (
          <label 
            key={i}
            onClick={() => setSelected(key)}
          >
            <input type="radio" name={title.toLowerCase()} value={key} defaultChecked={key === selected} />
            <span>{key}</span>
          </label>
        ))}
      </form>
    </Top>
  </>);
};

export default BlockTop;
