import React, { Component } from "react";
import Main from "./partials/Main";
import Sider from "./partials/Sider";

import { Provider } from "react-redux";
import store from "./store";

import { Layout } from "antd";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider />
          <Main />
        </Layout>
      </Provider>
    );
  }
}

export default App;
