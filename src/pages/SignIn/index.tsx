import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Background,
  Content,
  Title,
  Form,
  Input,
  Aside,
  Remember,
  Checkbox,
  Text,
  ButtonSubmit,
  Footer,
  SignUp,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <Form
          onSubmit={() => {
            console.log('teste');
          }}
        >
          <Title>Faça login</Title>
          <Input placeholder="E-mail" type="text" />
          <Input placeholder="Senha" type="text" />
          <Aside>
            <Remember>
              <Checkbox type="checkbox" />
              <Text>Lembrar-me</Text>
            </Remember>
            <Link to="/">Esqueci minha senha</Link>
          </Aside>
          <ButtonSubmit>Entrar</ButtonSubmit>
          <Footer>
            <SignUp>
              <strong>Não tem conta ?</strong>
              <br />
              <Link to="/signup">Cadastre-se</Link>
            </SignUp>
            <span>É de graça</span>
          </Footer>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
