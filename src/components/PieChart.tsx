import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import xkcd from '../data/xkcd';

interface Props {
  data: Record<string, number>;
};

const Container = styled.div`
  height: 6rem;
  max-width: 6rem;
  display: flex;
  place-items: center;
  padding-top: 1rem;
  position: relative;
`;

// const pie = d3.pie().sort(null);
const pie = d3.pie();
const arc = d3.arc();

const Slice = styled.path`
  transition-property: d, transform ;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const CurrentLabel = styled.span`
  position: absolute;
  top: -0.5rem;
  width: 100%;
  text-align: center;
`;

const PieChart = ({ data }: Props): React.ReactElement => {
  const [hovered, setHovered] = React.useState<string | null>(null);

  const parsedData: d3.PieArcDatum<any>[] = React.useMemo(() => {
    const total = Object.values(data).reduce((a, b) => a + b, 0);
    return pie(Object.values(data).map(value => (value / total)));
  }, [data]);

  return (
    <Container className="piechart">
      <CurrentLabel>{hovered}</CurrentLabel>
      <svg
        height="96"
        width="96"
        viewBox='-40 -40 80 80'
      >
        <g className="plot">
          {Object.keys(data).map(((key, i) => (
            <React.Fragment key={key}>
              <Slice
                d={arc({
                  ...parsedData[i],
                  innerRadius: 0,
                  outerRadius: 30,
                }) || ''}
                fill={xkcd[key].hex}
                stroke="black"
                strokeWidth={0.5}
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
              ><title>{key}</title></Slice>
            </React.Fragment>
          )))}
        </g>
      </svg>
    </Container>
  );
};

export default PieChart;
