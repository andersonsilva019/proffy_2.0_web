import styled, { keyframes } from 'styled-components';
import { Form as Unform } from '@unform/web';
import signInBackgroundImage from '../../assets/background-signin.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  place-content: center;

  width: 100%;
  max-width: 76.8rem;
  padding: 0 3rem;
`;
export const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  margin-bottom: 4rem;
`;
export const Form = styled(Unform)`
  position: absolute;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  margin-left: 1.6rem;
  font-size: 1.4rem;
  color: var(--color-text-complement);
`;

export const SubTitle = styled.h2`
  color: var(--color-text-base);
  font-size: 1.6rem;
  width: 21.3rem;
  margin-bottom: 4rem;
`;

export const ButtonSubmit = styled.button`
  margin-top: 4rem;
  background: var(--color-secundary);
  border: 0;
  border-radius: 0.8rem;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;

  color: var(--color-button-text);
  font-weight: 600;

  &:hover {
    background: var(--color-secundary-dark);
  }
`;
