import React, { Component, ErrorInfo } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
  public state = {
    redirect: '',
    hasError: false,
  };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }
  // set the types for error  and info
  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, info);
  }
  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          Houve um erro nessa página. <Link to="/">Clique aqui</Link> para
          voltar à página inicial ou espere 5 segundos.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
