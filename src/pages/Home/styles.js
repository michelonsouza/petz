import styled from 'styled-components';
import metrics from '~/styles/metrics';

export const Container = styled.div`
  width: 900px;
  max-width: 100%;
  margin: 20px auto;
  padding: 0 20px;
  min-height: calc(100vh - ${metrics.baseHeight * 1.94 * 2}px);

  @media screen and (min-width: 900px) {
    padding: 0;
  }

  form {
    display: flex;
    align-items: center;
    margin-bottom: ${metrics.basePadding}px;

    label {
      flex: 1;

      span {
        display: none;
      }
    }

    button {
      margin-left: 10px;
    }
  }
`;
