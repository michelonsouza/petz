import styled, { css, keyframes } from 'styled-components';

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

const postAnimate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  60% {
    opacity: 0.7;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

function createAnimation() {
  const arr = new Array(10).fill(1);

  return arr.map(
    (a, i) => css`
      & > div:nth-child(${i}) {
        animation: ${showList} ${i * 0.3}s ease;
      }
    `,
  );
}

export const Container = styled.div`
  width: 900px;
  max-width: 100%;
  margin: 20px auto;
  padding: 0 20px;
  min-height: calc(100vh - ${metrics.baseHeight * 1.94 * 2}px);

  .post-container {
    animation: ${postAnimate} 800ms ease forwards;
  }

  @media screen and (min-width: 900px) {
    padding: 0;
  }

  .back-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.inputBorder};

    button {
      display: flex;
      width: fit-content;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.text};
      font-weight: bold;
      background: transparent;

      svg {
        margin-right: 5px;
        stroke: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${createAnimation()};
`;

export const Comment = styled.div`
  border-left: 10px solid ${({ theme }) => theme.colors.secondary};
  border-top: 2px solid ${({ theme }) => theme.colors.inputBorder};
  border-right: 2px solid ${({ theme }) => theme.colors.inputBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${metrics.borderRadius}px;
  padding: ${metrics.basePadding}px;
  overflow: hidden;
  font-size: 0.9rem;

  & + div {
    margin-top: 15px;
  }

  div.author-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }

  div.comment-body {
    border: 2px solid ${({ theme }) => theme.colors.inputBorder};
    padding: ${metrics.basePadding / 2}px;
    border-radius: ${metrics.borderRadius}px;
    margin-top: 10px;

    p {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 5px 0 20px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputBorder};

  .post-content-container {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    .post-img {
      margin-bottom: 20px;
      border-radius: ${metrics.borderRadius}px;

      background: url("${({ img }) =>
        img}") center center no-repeat, url("/logo_petz.webp");
      background-size: cover;
      height: 200px;
      width: 100%;

      @media screen and (min-width: 768px) {
        height: 200px;
        max-width: 200px;
        margin-right: 20px;
        margin-bottom: 0;
      }
    }

    img {
      margin-bottom: 20px;
      border-radius: ${metrics.borderRadius}px;

      @media screen and (min-width: 768px) {
        height: 200px;
        margin-right: 20px;
        margin-bottom: 0;
      }
    }

    h1 {
      color: ${({ theme }) => theme.colors.text};
      margin: 0 0 20px 0;
    }

    p {
      font-size: 1.3rem;
    }
  }

  .author-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    span {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;

export const LoadingContainer = styled.div`
  background: rgba(
    ${({ theme }) => (theme.type === 'light' ? '0, 0, 0,' : '255, 255, 255,')}
      0.2
  );
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: ${metrics.borderRadius}px;
`;
