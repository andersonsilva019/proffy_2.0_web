import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, Title, Description } from './styles';

const SignUpFinished: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Cadastro concluído</Title>
        <Description>
          Agora você faz parte da plataforma da Proffy. Tenha uma ótima
          experiência
        </Description>
        <Link to="/">Fazer login</Link>
      </Content>
    </Container>
  );
};

export default SignUpFinished;
