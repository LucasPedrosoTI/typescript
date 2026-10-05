import React from 'react';

import './styles.css';
import ButtonLink from '../../components/Button';
import LoginContainer from '../../components/LoginContainer';
import LoginForm from '../../components/LoginForm';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const LoginHome = () => {
  const { width } = useWindowDimensions();

  return (
    <LoginContainer>
      <section className="login_form">
        <LoginForm />
      </section>

      <section className="button_container">
        {width < 500 && <ButtonLink to="/signin">Entrar</ButtonLink>}
        <ButtonLink to="/signup" color="secondary">
          Criar conta
        </ButtonLink>
      </section>
    </LoginContainer>
  );
};

export default LoginHome;
