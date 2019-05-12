import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <h1>Hello world!</h1>
  </Provider>
);

export default App;
