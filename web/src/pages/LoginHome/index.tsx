import React from 'react';

import './styles.css';
import ButtonLink from '../../components/Button';
import LoginContainer from '../../components/LoginContainer';

const LoginHome = () => {
  return (
    <LoginContainer>
      <section className="button_container">
        <ButtonLink to="/signin">Entrar</ButtonLink>
        <ButtonLink to="/signup" color="secondary">
          Criar conta
        </ButtonLink>
      </section>
    </LoginContainer>
  );
};

export default LoginHome;
