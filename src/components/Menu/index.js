import React from "react";
import { Menu as AntdMenu, Icon } from "antd";
// const SubMenu = AntdMenu.SubMenu;

const Menu = () => (
  <AntdMenu
    theme="dark"
    style={{ marginTop: 10 }}
    defaultSelectedKeys={["1"]}
    mode="inline"
  >
    <AntdMenu.Item key="1">
      <Icon type="form" />
      <span>My Todo List</span>
    </AntdMenu.Item>
    <AntdMenu.Item key="2">
      <Icon type="question-circle" />
      <span>About</span>
    </AntdMenu.Item>
  </AntdMenu>
);

export default Menu;
