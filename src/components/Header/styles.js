import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  height: ${metrics.baseHeight * 1.5}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 20px;

  a > img {
    max-height: ${metrics.baseHeight}px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 100px;
  }
`;
