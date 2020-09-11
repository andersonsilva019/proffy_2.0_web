import styled, { keyframes } from 'styled-components';
import signUpFinishedBackgroundImage from '../../assets/cad.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--color-primary);
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Content = styled.div`
  height: 100vh;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  animation: ${appearFromLeft} 1s;

  flex: 1;
  background: url(${signUpFinishedBackgroundImage}) no-repeat center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-secundary);
    width: 19.7rem;
    height: 5.6rem;
    color: var(--color-button-text);
    text-decoration: none;
    border-radius: 0.8rem;
    font-family: 'Archivo';
    font-weight: 600;
    transition: background 0.2s;

    margin-top: 4rem;

    &:hover {
      background: var(--color-secundary-dark);
    }
  }
`;

export const Title = styled.h1`
  font-size: 5.4rem;
  color: var(--color-title-in-primary);
`;

export const Description = styled.strong`
  margin-top: 2.4rem;
  color: var(--color-text-in-primary);
  width: 36.7rem;
  text-align: center;
`;
