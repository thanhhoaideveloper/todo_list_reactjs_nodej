import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TodoContext } from "../../pages/Home";

function TodoAction({ isDisplayClearBtn }) {
  const { todos, todoClearComplete, todoFilter } = useContext(TodoContext);
  const [active, setActive] = useState("all");

  const handleFilter = (query, btnActive) => {
    todoFilter(query);
    setActive(btnActive);
  };

  return (
    <Container>
      <span>{todos.length} items</span>
      <div className="action">
        <button
          className={`btn_action ${active === "all" ? "active" : ""}`}
          onClick={() => handleFilter({}, "all")}
        >
          All
        </button>
        <button
          className={`btn_action ${active === "active" ? "active" : ""}`}
          onClick={() => handleFilter({ isCompleted: false }, "active")}
        >
          Active
        </button>
        <button
          className={`btn_action ${active === "completed" ? "active" : ""}`}
          onClick={() => handleFilter({ isCompleted: true }, "completed")}
        >
          Completed
        </button>
      </div>
      {isDisplayClearBtn && (
        <button className="btn_action" onClick={todoClearComplete}>
          Clear Completed
        </button>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  .btn_action {
    border: none;
    outline: none;
    background: white;
    cursor: pointer;
    margin: 0.1rem;
  }
  .active {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export default TodoAction;
