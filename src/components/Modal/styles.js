import styled, { keyframes } from 'styled-components';

import metrics from '~/styles/metrics';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const overlayTransition = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const overlayTransitionClosing = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: all 300ms ease;
  animation: ${overlayTransition} 500ms ease forwards;

  &.closing {
    animation-delay: 500ms;
    animation: ${overlayTransitionClosing} 500ms ease forwards;
  }
`;

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const modalAnimationClose = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(60px);
  }
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${metrics.borderRadius}px;
  overflow: hidden;
  width: 450px;
  max-width: 100%;
  position: relative;
  z-index: 11000;
  margin: 0 20px;
  opacity: 0;
  transform: translateY(60px);
  transition: all 500ms ease;
  animation: ${modalAnimation} 500ms ease forwards;
  animation-delay: 500ms;

  &.closing {
    animation: ${modalAnimationClose} 500ms ease forwards;
  }

  header {
    padding: ${metrics.basePadding}px;
    background: ${({ theme }) => theme.colors.inputBackground};

    p {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

export const ModalContent = styled.div`
  padding: ${metrics.basePadding}px;

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
