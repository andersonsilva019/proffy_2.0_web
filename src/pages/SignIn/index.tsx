import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff, FiMail } from 'react-icons/fi';
import { Input } from '../../components';
import {
  Container,
  Background,
  Content,
  Title,
  Form,
  Aside,
  Remember,
  Checkbox,
  Text,
  ButtonSubmit,
  Footer,
  SignUp,
} from './styles';

const SignIn: React.FC = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleToggleVisiblePassword = useCallback(() => {
    setIsVisiblePassword(!isVisiblePassword);
  }, [isVisiblePassword]);

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
          <Input name="email" placeholder="E-mail" type="text" />
          <Input
            name="password"
            placeholder="Senha"
            type={isVisiblePassword ? 'text' : 'password'}
            icon={isVisiblePassword ? FiEye : FiEyeOff}
            toggleVisiblePassword={handleToggleVisiblePassword}
          />
          <Aside>
            <Remember>
              <Checkbox name="check" type="checkbox" />
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
