import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TodoList from "../components/Todo";
import About from "../components/About";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
