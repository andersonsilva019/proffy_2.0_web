import styled from 'styled-components';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--color-primary);
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`;
export const Header = styled.div`
  margin-top: 2.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 1.6rem;
`;
export const Name = styled.strong`
  color: var(--color-text-in-primary);
  font-size: 1.4rem;
  font-family: 'Poppins';
`;

export const Button = styled.button`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  background: var(--color-primary-dark);
  border: 0;
  border-radius: 0.8rem;
`;
export const IconPower = styled(FiPower)`
  color: var(--color-text-in-primary);
`;
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15rem;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Logo = styled.img``;
export const Description = styled.div`
  color: var(--color-text-in-primary);
  font-size: 3rem;
  width: 29.8rem;
`;
export const Image = styled.img`
  width: 60rem;
  height: 35rem;
`;

export const Footer = styled.div`
  width: 100%;
  background: var(--color-line-in-white);
  height: 100%;
`;

export const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 112rem;
  margin: 3.2rem auto;
  padding: 5.6rem 3rem;
`;
export const Text = styled.div`
  color: var(--color-text-base);
  font-size: 2rem;

  > span {
    color: var(--color-text-title);
    font-weight: 500;
  }
`;
export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
`;
export const Connections = styled.div`
  color: var(--color-text-complement);
  font-size: 1.2rem;
  margin-right: 5.3rem;
`;
export const ButtonStudy = styled(Link)`
  cursor: pointer;
  width: 25rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;

  margin-right: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  text-decoration: none;
  color: var(--color-button-text);
  background: var(--color-primary-lighter);

  &:hover {
    background: var(--color-primary-light);
  }

  svg {
    margin-right: 3rem;
  }
`;
export const ButtonClass = styled(Link)`
  cursor: pointer;
  width: 25rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  text-decoration: none;
  color: var(--color-button-text);
  background: var(--color-secundary);

  &:hover {
    background: var(--color-secundary-dark);
  }

  svg {
    margin-right: 3rem;
  }
`;
