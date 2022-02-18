import React from 'react';
import styled from 'styled-components';
import ColorName from '../../../../components/ColorName';

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
  display: flex;
  align-items: flex-end;
  justify-content: right;

  & > span:first-child {
    margin-right: auto;
  }
`;

interface Props {
  title: string, 
  options: string[], 
  selected: string, 
  setSelected: (method: string) => void, 
  subtitle?: string, 
  round?: number,
  winners?: string[],
};

const BlockTop: React.FC<Props> = ({ 
  title, options, selected, setSelected, 
  subtitle = '', round, winners
}) => {
  const [methodName, setMethodName] = React.useState<string>('');

  return (<>
    <Top>
      <h3
        onMouseOver={() => setMethodName(subtitle)}
        onMouseOut={() => setMethodName('')}
      >{methodName || `${title} methods`}</h3>
      <form name={`${title.toLowerCase()}-options`}>
        {options?.map((key: string, i: number) => (
          <label 
            key={i}
            onClick={() => setSelected(key)}
          >
            <input type="radio" name={title.toLowerCase()} value={key} readOnly={true} checked={key === selected} />
            <span>{key}</span>
          </label>
        ))}
      </form>
    </Top>
    <SubTop>
      <span>{(round || round === 0) && `Round ${round + 1}`}</span>
      {winners?.length ? winners.map(name => {
        return <ColorName key={name} name={name} />;
      }) : null}
    </SubTop>
  </>);
};

const MemoizedBlockTop = React.memo(BlockTop);

export default BlockTop;
export { MemoizedBlockTop };
