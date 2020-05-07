import styled, { keyframes, css } from 'styled-components';

import metrics from '~/styles/metrics';

const showList = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function createAnimation() {
  const arr = new Array(10).fill(1);

  return arr.map(
    (a, i) => css`
      & > div:nth-child(${i}) {
        animation: ${showList} ${i * 0.4}s ease;
      }
    `,
  );
}

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr;
  margin-bottom: 15px;
  position: relative;
  min-height: 50vh;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  ${createAnimation()};

  & > div:nth-child(n + 10) {
    animation: ${showList} 0.5s ease;
  }
`;

export const Card = styled.div`
  /* height: ${metrics.baseHeight * 1.3}px; */
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.inputBorder};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${metrics.borderRadius}px;
  display: flex;
  align-items: center;
  transition: all 200ms ease;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px 3px rgba(0, 0, 0, 0.2);
  }

  div.card-img {
    background: url("${({ img }) => img}") center center no-repeat;
    background-size: cover;
    height: 200px;
    width: 100%;
  }

  .card-content {
    padding: ${metrics.basePadding / 2}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    span:not(.author) {
      flex: 1;
    }

    span.author {
      font-size: 0.8rem;
      font-weight: bold;
      display: block;
      margin-bottom: 10px;
    }

    .post-title {
      color: ${({ theme }) => theme.colors.textSecondary};
    }

    .action-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      button:not(.post-title) {
        height: ${metrics.baseHeight}px;
        border: 2px solid ${({ theme }) => theme.colors.danger};
        border-radius: ${metrics.borderRadius}px;
        color: ${({ theme }) => theme.colors.danger};
        margin-top: 20px;
        background: transparent;
        flex: 1;

        & + button {
          border-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.primary};
          margin-left: 10px;
          font-weight: bold;

          &:hover {
            background: ${({ theme }) => theme.colors.primary};
            color: #fff;
          }
        }

        svg {
          transition: stroke 200ms ease;
        }

        &:hover {
          background: ${({ theme }) => theme.colors.danger};

          svg {
            stroke: #fff;
          }
        }
      }
    }
  }
`;

export const LoadingOverlay = styled.div`
  background: rgba(
    ${({ theme }) => (theme.type === 'light' ? '0, 0, 0,' : '255, 255, 255,')}
      0.2
  );

  width: 100%;
  height: 100%;
  border-radius: ${metrics.borderRadius}px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
