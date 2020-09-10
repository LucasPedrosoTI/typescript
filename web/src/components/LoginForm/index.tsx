import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './styles.css';

import {
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';

import {
  EmailOutlined,
  LockOutlined,
  Visibility,
  VisibilityOff,
  RadioButtonUncheckedOutlined,
  CheckCircle,
} from '@material-ui/icons';

import { Auth } from '../../services/auth_service';
import ErrorMessage from '../../errors/ErrorMessage';

interface State {
  email: string;
  password: string;
  rememberMe: boolean;
  showPassword: boolean;
}

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { values, setValue } = useForm({
    email: '',
    password: '',
    rememberMe: true,
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(prop, event.target.value);
  };

  const handleClickShowPassword = () => {
    setValue('showPassword', !values.showPassword);
  };

  const handleRememberMe = () => {
    setValue('rememberMe', !values.rememberMe);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        email: values.email,
        password: values.password,
      };

      const response = await Auth.signin(data);

      console.log(response?.data);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
    }
  };

  return (
    <form className="login_form" onSubmit={handleSubmit}>
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

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <Button
        type="submit"
        className="form_button"
        variant="contained"
        color="primary"
        size="large"
      >
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
