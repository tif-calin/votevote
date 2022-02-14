import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  & h3 {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    & > span {
      font-weight: 300;
      font-size: 0.8rem;
    }
  }

  & > form {
    display: flex;
    align-items: center;
    flex-shrink: 0;

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

const SubTop = styled.span`
  line-height: 1;
  font-size: 1rem;
  margin-top: -0.5rem;
`;

interface Props {
  [key: string]: any;
};

const BlockTop: React.FC<Props> = ({ 
  title, options, selected, setSelected, subtitle, round
}) => {
  const [methodName, setMethodName] = React.useState<string>('');

  return (<>
    <Top>
      <h3>{methodName || title}</h3>
      <form name={`${title.toLowerCase()}-options`}>
        {options?.map((key: string, i: number) => (
          <label 
            key={i}
            onClick={() => setSelected(key)}
            onMouseOver={() => setMethodName(subtitle)}
            onMouseOut={() => setMethodName('')}
          >
            <input type="radio" name={title.toLowerCase()} value={key} readOnly={true} checked={key === selected} />
            <span>{key}</span>
          </label>
        ))}
      </form>
    </Top>
    {(round || round === 0) && <SubTop>Round {round + 1}</SubTop>}
  </>);
};

export default BlockTop;
