import React from 'react';
import AvatarDefault from '../../assets/avatar_default.png';
import LogoImage from '../../assets/logo.png';
import IlutraImage from '../../assets/Ilustra.png';
import {
  Container,
  Content,
  Header,
  Profile,
  Avatar,
  Name,
  IconPower,
  Main,
  Group,
  Logo,
  Description,
  Image,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Profile>
            <Avatar src={AvatarDefault} alt="Avatar" />
            <Name>Anderson Silva</Name>
          </Profile>
          <IconPower />
        </Header>

        <Main>
          <Group>
            <Logo src={LogoImage} alt="Proffy" />
            <Description>Sua plataforma de estudos online</Description>
          </Group>
          <Image src={IlutraImage} alt="ilutra" />
        </Main>
      </Content>
    </Container>
  );
};

export default Dashboard;
