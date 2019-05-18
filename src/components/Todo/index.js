import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Table, Divider } from "antd";

const columns = [
  {
    title: "Description",
    dataIndex: "text",
    key: "text"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    )
  }
];

const TodoList = props => {
  console.log(props);
  return <Table columns={columns} dataSource={props.todos} bordered />;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
