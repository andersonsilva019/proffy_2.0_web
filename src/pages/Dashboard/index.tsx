import React from 'react';
import { FiBookOpen, FiTv } from 'react-icons/fi';
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
  Button,
  IconPower,
  Main,
  Group,
  Logo,
  Description,
  Image,
  Footer,
  Text,
  GroupButtons,
  Connections,
  ButtonStudy,
  ButtonClass,
  ContentFooter,
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
          <Button>
            <IconPower />
          </Button>
        </Header>

        <Main>
          <Group>
            <Logo src={LogoImage} alt="Proffy" />
            <Description>Sua plataforma de estudos online</Description>
          </Group>
          <Image src={IlutraImage} alt="ilutra" />
        </Main>
      </Content>
      <Footer>
        <ContentFooter>
          <Text>
            Seja bem-vindo.
            <br />
            <span>O que deseja fazer ?</span>
          </Text>
          <GroupButtons>
            <Connections>
              Total de 256 conexões
              <br />
              já realizadas
            </Connections>
            <ButtonStudy to="/">
              <FiBookOpen size={30} color="#FFF" />
              Estudar
            </ButtonStudy>
            <ButtonClass to="/">
              <FiTv size={30} color="#FFF" />
              Dar aulas
            </ButtonClass>
          </GroupButtons>
        </ContentFooter>
      </Footer>
    </Container>
  );
};

export default Dashboard;
