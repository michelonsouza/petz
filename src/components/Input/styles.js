import styled from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: ${metrics.baseHeight}px;
  border-radius: ${metrics.borderRadius}px;
  padding: 0 ${metrics.basePadding}px;
  border: 2px solid ${({ theme }) => theme.colors.inputBorder};
  display: flex;
  flex: 1;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  input {
    color: ${({ theme }) => theme.colors.text};
    border: 0;
    background: transparent;
    display: flex;
    width: 100%;
    height: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;
