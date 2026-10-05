import React, { ReactNode } from 'react';

import mobileDashboard from '../../assets/img/login.svg';

import './styles.css';

const LoginContainer = (props: { children: ReactNode }) => {
  return (
    <main>
      <img
        className="mobile_dashboard"
        src={mobileDashboard}
        alt="imagem dashboard"
      />

      <div className="info_section">
        <section className="text_container">
          <h1>Bem-vindo(a) ao app +gestão</h1>
          <p>
            Um aplicativo para precificar e gerir as finanças da sua empresa
          </p>
        </section>
        {props.children}
      </div>
    </main>
  );
};

export default LoginContainer;
