import React from 'react';

import { Title, Form } from './styles';
import logoImg from '../../assets/logo-github.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
