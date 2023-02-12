import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoAction from "./TodoAction";
import { TodoContext } from "../../pages/Home";

function TodoList() {
  const { todos } = useContext(TodoContext);
  const isDisplayClearBtn = todos.find((item) => item.isCompleted);
  return (
    <Container>
      {todos.map((item, key) => (
        <TodoItem
          id={item._id}
          title={item.title}
          key={key}
          completed={item.isCompleted}
        />
      ))}
      <TodoAction isDisplayClearBtn={isDisplayClearBtn} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: white;
  box-shadow: 5px 10px 13px 3px rgb(0 0 0 / 20%);
`;

export default TodoList;
