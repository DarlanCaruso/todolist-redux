import React from "react";
import Breadcrumb from "../Breadcrumb";
import { Layout } from "antd";
import TodoList from "../../components/Todo";

const Content = () => (
  <Layout.Content style={{ margin: "16px" }}>
    {/* <Breadcrumb /> */}
    <div
      style={{
        padding: 24,
        background: "#fff",
        minHeight: 360
      }}
    >
      <TodoList />
    </div>
  </Layout.Content>
);

export default Content;
