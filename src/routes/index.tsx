import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "routes/home";
import About from "routes/about";
import Error404 from "routes/error404";

import NavigationLinks from "components/atoms/NavigationLinks";

const AppRoutes = () => (
  <>
    <NavigationLinks></NavigationLinks>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/production">
        <div>Production</div>
      </Route>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  </>
);

export default AppRoutes;
