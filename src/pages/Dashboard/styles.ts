import styled from 'styled-components';
import { FiPower } from 'react-icons/fi';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--color-primary);
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
export const Main = styled.div``;
export const Group = styled.div``;
export const Logo = styled.img``;
export const Description = styled.div``;
export const Image = styled.img``;
