import React, { useContext, useState } from "react";
import styled from "styled-components";

import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { TodoContext } from "../../pages/Home";

function TodoItem({ id, title, completed }) {
  const { todoCompleted, todoDelete, todoUpdate } = useContext(TodoContext);
  const [hoverDelete, setHoverDelete] = useState(false);
  const [update, setUpdate] = useState(false);
  const [inputUpdate, setInputUpdate] = useState(title);

  const handleCompleted = () => {
    todoCompleted(id, !completed);
  };

  const handleDelete = () => {
    todoDelete(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todoUpdate({ id, title: inputUpdate });
    setUpdate(false);
  };

  return (
    <Container
      onMouseEnter={() => setHoverDelete(true)}
      onMouseLeave={() => setHoverDelete(false)}
    >
      {completed && update ? (
        <BsCheckCircleFill onClick={handleCompleted} />
      ) : (
        <BsCircle onClick={handleCompleted} />
      )}
      <div className="conent">
        <span
          className={completed ? "completed" : ""}
          onClick={() => setUpdate(true)}
        >
          {title}
        </span>
        {update && (
          <form onSubmit={handleSubmit}>
            <input
              className="input__update"
              value={inputUpdate}
              onChange={(e) => setInputUpdate(e.target.value)}
              onBlur={handleSubmit}
            />
          </form>
        )}
      </div>
      {hoverDelete && !update && <IoMdClose onClick={handleDelete} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .conent {
    flex: 1;
    position: relative;
    span {
      font-size: 1.2rem;
      padding: 0px 5px;
      cursor: pointer;
    }
    .completed {
      text-decoration-line: line-through;
      color: rgba(0, 0, 0, 0.5);
    }
    .input__update {
      position: absolute;
      top: 0;
      right: 10px;
      bottom: 0;
      left: 5px;
    }
  }
  svg {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export default TodoItem;
