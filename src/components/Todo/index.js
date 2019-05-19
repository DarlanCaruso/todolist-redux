import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as TodoActions from "../../store/actions/todos";
import { bindActionCreators } from "redux";
import moment from "moment";
import { Table, Input, Button, Tag, Row, Col } from "antd";

const TodoList = props => {
  const { todos, addTodo, removeTodo } = props;
  console.log(props);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: date =>
        moment(date)
          .locale("pt-BR")
          .format("DD/MM/YYYY")
    },
    {
      title: "Description",
      dataIndex: "text",
      key: "text"
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: status => {
        let color = status === "done" ? "volcano" : "green";
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      }
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <span>
            <a href="javascript:;" onClick={() => removeTodo(record.key)}>
              Delete
            </a>
          </span>
        );
      }
    }
  ];

  return (
    <>
      <Row style={{ marginBottom: 15 }}>
        <Col span={22}>
          <Input
            size="large"
            placeholder="Add a new todo"
            style={{ borderRadius: 0 }}
          />
        </Col>

        <Col span={2}>
          <Button
            type="primary"
            size="large"
            block
            style={{ borderRadius: 0 }}
            icon="plus"
            onClick={() => addTodo("Novo todo")}
          />
        </Col>
      </Row>
      <Table columns={columns} dataSource={todos} bordered />
    </>
  );
};

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      text: PropTypes.string,
      date: PropTypes.date,
      status: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
