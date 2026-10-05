import React from 'react';
import LoginContainer from '../../components/LoginContainer';

import LoginForm from '../../components/LoginForm';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import './styles.css';

const SignIn = () => {
  return (
    <LoginContainer>
      <Link to="/" className="back_button">
        <ArrowBack fontSize="inherit" className="back_icon" />
      </Link>

      <LoginForm />
    </LoginContainer>
  );
};

export default SignIn;
