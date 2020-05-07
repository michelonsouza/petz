import styled from 'styled-components';
import { shade } from 'polished';

import metrics from '~/styles/metrics';

function getBackgroundColor(variant, theme) {
  return theme.colors[variant];
}

function getColor(variant, theme) {
  return variant !== 'secondary' ? '#fff' : theme.colors.textSecondary;
}

export const Container = styled.button`
  background: ${({ variant, theme }) => getBackgroundColor(variant, theme)};
  color: ${({ variant, theme }) => getColor(variant, theme)};
  border-radius: ${metrics.borderRadius}px;
  height: ${metrics.baseHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  padding: 0 20px;
  font-weight: bold;

  &:hover {
    background: ${({ variant, theme }) =>
      shade(0.1, getBackgroundColor(variant, theme))};
  }
`;
