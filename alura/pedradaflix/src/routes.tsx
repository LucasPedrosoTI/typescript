import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./containers/Home";
import NewVideo from "./containers/NewVideo";
import Page404 from "./containers/Page404";
import NewCategory from "./containers/NewCategory";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />

        <Route component={NewVideo} path="/new/video" />

        <Route component={NewCategory} path="/new/category" />

        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default Routes;
