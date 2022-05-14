import React from 'react';
import styled from 'styled-components';
import ColorName from '../../../components/ColorName';
import PieChart from '../../../components/PieChart';
import SuperElection, { ResultFull } from '../../../services/voting/SuperElection';

interface Props {
  data?: Record<string, ResultFull>;
  election?: SuperElection;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > .piechart {
    align-self: center;
  }

  & > p {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    line-height: 1.15;

    & > :not(span:first-child) {
      text-align: right;
    }

    & > span:first-child {
      flex-grow: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &::after { 
        content: ': ';
      }
    }
  }
`;

const statName: Record<string, string> = {
  untiedWinnerCount: 'Winners count',
  mostWins: 'Biggest winner',
  loserCount: 'Losers count',
};

const StatsBox = ({ data, election }: Props): React.ReactElement => {

  const { stats = {}, winCounts = {} } = React.useMemo(() => {
    console.debug(election);

    if (data?.fptp && election?.candidates) {
      console.debug(data);
      const winCounts = election.candidates.reduce((acc, curr) => ({
        ...acc,
        [curr]: 0
      }), {} as Record<string, number>);
      const winSet = new Set(
        Object.values(data).reduce(
          (acc, { winners }) => {
            winners.forEach(winner => winCounts[winner] += (1 / winners.length));
            return winners.length === 1 ? [acc, winners].flat() : acc;
          }, 
          [] as string[]
        )
      );
      console.table(winCounts);
      console.log(winSet.size);
      // for (let method of Object.keys(dataFull)) console.debug(method, dataFull[method].winners);

      const maxScore = Object.values(winCounts).reduce((acc, curr) => Math.max(acc, curr), 0);

      return {
        stats: {
          untiedWinnerCount: winSet.size,
          loserCount: election.candidates.filter(c => winCounts[c] < 1).length,
          mostWins: election.candidates.filter(c => winCounts[c] === maxScore),
        },
        winCounts,
      };
    }

    return {} as { stats: Record<string, number>, winCounts: Record<string, number> };
  }, [data, election]);

  return (
    <Container className="island">
      <h3>Statistics</h3>
      <PieChart data={winCounts} />
      {Object.entries(stats).map(([key, value]) => (
        <p key={key}>
          <span title={statName[key] || key}>{statName[key] || key}</span>
          <span>
            {Array.isArray(value) ? value.map(key => <ColorName name={key} />) : value}
          </span>
        </p>
      ))}
    </Container>
  );
};

export default StatsBox;
