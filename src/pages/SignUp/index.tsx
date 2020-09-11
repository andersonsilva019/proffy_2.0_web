import React, { useState, useCallback } from 'react';
import { FiEye, FiEyeOff, FiMail } from 'react-icons/fi';
import { Input } from '../../components';
import {
  Container,
  Background,
  Content,
  Title,
  SubTitle,
  Form,
  ButtonSubmit,
} from './styles';

const SignUp: React.FC = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleToggleVisiblePassword = useCallback(() => {
    setIsVisiblePassword(!isVisiblePassword);
  }, [isVisiblePassword]);

  return (
    <Container>
      <Content>
        <Form
          onSubmit={() => {
            console.log('teste');
          }}
        >
          <Title>Cadastro</Title>
          <SubTitle>Preencha os dados abaixo para começar</SubTitle>
          <Input name="name" placeholder="Nome" type="text" />
          <Input name="lastname" placeholder="Sobrenome" type="text" />
          <Input name="email" placeholder="E-mail" type="email" />
          <Input
            name="password"
            placeholder="Senha"
            type={isVisiblePassword ? 'text' : 'password'}
            icon={isVisiblePassword ? FiEyeOff : FiEye}
            toggleVisiblePassword={handleToggleVisiblePassword}
          />
          <ButtonSubmit>Cadastrar</ButtonSubmit>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignUp;
