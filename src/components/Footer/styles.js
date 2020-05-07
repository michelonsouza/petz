import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  height: ${metrics.baseHeight * 1.5}px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 20px;
  bottom: auto;
  position: relative;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  img {
    max-height: ${metrics.baseHeight * 1.2}px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 100px;
  }
`;
