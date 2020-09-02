import React, { useState } from 'react';
import LoginContainer from '../../components/LoginContainer';
import {
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  FilledInput,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  LockOutlined,
  EmailOutlined,
  RadioButtonUncheckedOutlined,
  CheckCircle,
} from '@material-ui/icons';

import './styles.css';
import { Link } from 'react-router-dom';

interface State {
  email: string;
  password: string;
}

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    rememberMe: true,
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(values);

    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleRememberMe = () => {
    setValues({ ...values, rememberMe: !values.rememberMe });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <LoginContainer>
      <form className="login_form">
        <FormControl className="form_control" required={true}>
          <InputLabel className="input_label" htmlFor="email">
            E-mail
          </InputLabel>
          <FilledInput
            className="input"
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            startAdornment={
              <InputAdornment position="start">
                <EmailOutlined color="disabled" fontSize="large" />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl className="form_control" required={true}>
          <InputLabel className="input_label" htmlFor="password">
            Senha
          </InputLabel>
          <FilledInput
            className="input"
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            startAdornment={
              <InputAdornment position="start">
                <LockOutlined color="disabled" fontSize="large" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <Visibility color="disabled" />
                  ) : (
                    <VisibilityOff color="disabled" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <section className="form_options">
          <FormControlLabel
            className="options_text"
            control={
              <Checkbox
                color={values.rememberMe ? 'secondary' : 'default'}
                icon={<RadioButtonUncheckedOutlined fontSize="large" />}
                checkedIcon={<CheckCircle fontSize="large" />}
                name="rememberMe"
                onChange={handleRememberMe}
                checked={values.rememberMe}
              />
            }
            label="Lembrar-me"
          />

          <Link to="/" className="options_text">
            Esqueci a senha
          </Link>
        </section>

        <Button
          className="form_button"
          variant="contained"
          color="primary"
          size="large"
        >
          Entrar
        </Button>
      </form>
    </LoginContainer>
  );
};

export default SignIn;
