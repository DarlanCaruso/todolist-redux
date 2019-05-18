import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";

const Breadcrumb = () => (
  <AntdBreadcrumb style={{ margin: "16px 0" }}>
    <AntdBreadcrumb.Item>User</AntdBreadcrumb.Item>
    <AntdBreadcrumb.Item>Bill</AntdBreadcrumb.Item>
  </AntdBreadcrumb>
);

export default Breadcrumb;
