import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "routes/home";
import Error404 from "routes/error404";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <div>About</div>
    </Route>
    <Route path="/production">
      <div>Production</div>
    </Route>
    <Route path="*">
      <Error404 />
    </Route>
  </Switch>
);

export default AppRoutes;
