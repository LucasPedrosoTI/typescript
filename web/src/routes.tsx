import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginHome from './pages/LoginHome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginHome} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
