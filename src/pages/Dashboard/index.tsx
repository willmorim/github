import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
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

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/33011070?s=460&u=d548826323e059885477f776d6736adf68eefda7&v=4"
            alt="William Amorim"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Testando o layout</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/33011070?s=460&u=d548826323e059885477f776d6736adf68eefda7&v=4"
            alt="William Amorim"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Testando o layout</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/33011070?s=460&u=d548826323e059885477f776d6736adf68eefda7&v=4"
            alt="William Amorim"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Testando o layout</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
