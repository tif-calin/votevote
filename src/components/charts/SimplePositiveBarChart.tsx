import React from 'react';
import styled from 'styled-components';
import useChartDimensions from '../../hooks/useChartDimensions';

const Container = styled.div`
  height: 100%;
  width: 100%;

  & > svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

interface Props {
  data: { [key: string]: number };
};

const SimplePositiveBarChart: React.FC<Props> = ({ data }) => {
  const [ref, { height, width }] = useChartDimensions();

  return (
    <Container>
      <svg 
        ref={ref}
        viewBox={`0 0 ${width} ${height}`}
      >

      </svg>
    </Container>
  );
};

export default SimplePositiveBarChart;
