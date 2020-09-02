import React, { ReactNode } from 'react';

import mobileDashboard from '../../assets/img/mobile-dashboard.svg';

import './styles.css';

const LoginContainer = (props: { children: ReactNode }) => {
  return (
    <>
      <main>
        <img
          className="mobile_dashboard"
          src={mobileDashboard}
          alt="imagem dashboard"
        />

        <section className="text_container">
          <h1>Bem-vindx ao app +gestão</h1>
          <p>
            Um aplicativo para precificar e gerir as finanças da sua empresa
          </p>
        </section>
        {props.children}
      </main>
    </>
  );
};

export default LoginContainer;
