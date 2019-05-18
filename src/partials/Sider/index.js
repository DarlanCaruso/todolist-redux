import React from "react";
import { Layout } from "antd";
import Menu from "../../components/Menu";
import logo from "../../assets/logo.png";

class Sider extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout.Sider
        theme="dark"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo">
          {/* <img src={logo} height="65" style={{ margin: "0 10px" }} /> */}
        </div>
        <Menu />
      </Layout.Sider>
    );
  }
}

export default Sider;
