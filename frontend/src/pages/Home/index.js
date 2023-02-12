import React, { createContext, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import TodoList from "../../components/todo/TodoList";
import { initialTodos, todoReducer } from "../../reducer/todoReducer";
import todoApi from "../../apis/todo.api";

export const TodoContext = createContext();

function Home() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await todoApi.create({ title: todoInput }).then((res) => {
      fetch();
    });
    setTodoInput("");
  };

  const value = {
    todos,
    todoCompleted: async (id, completed) => {
      await todoApi.update({ isCompleted: completed }, id).then((res) => {
        fetch();
      });
    },
    todoDelete: async (id) => {
      await todoApi.deleteTodo(id).then((res) => {
        fetch();
      });
    },
    todoClearComplete: async () => {
      await todoApi.clearCompleted().then((res) => {
        fetch();
      });
    },
    todoUpdate: async (data) => {
      await todoApi.update({ title: data.title }, data.id).then((res) => {
        fetch();
      });
    },
    todoFilter: async (query) => {
      console.log(query);
      await fetch(query);
    },
  };

  const handleTodoAll = () => {
    dispatch({
      type: "TODO_COMPLETE_ALL",
    });
  };

  const fetch = async (query) => {
    const data = await todoApi.findAll(query);
    dispatch({
      type: "TODO_FETCH",
      payload: data,
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <TodoContext.Provider value={value}>
      <Container>
        <h3 className="title">Todos</h3>
        <div className="content">
          <div className="field">
            {todos.length > 0 && (
              <BsFillArrowDownCircleFill onClick={handleTodoAll} />
            )}
            <form onSubmit={handleSubmit}>
              <input
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                placeholder="What needs to be done?"
              />
            </form>
          </div>
          <TodoList list={todos} />
        </div>
      </Container>
    </TodoContext.Provider>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  flex-direction: column;
  .title {
    text-transform: uppercase;
    font-size: 4rem;
    color: rgba(255, 0, 0, 0.08);
  }

  .content {
    width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .field {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 5px 10px 13px 3px rgb(0 0 0 / 20%);
      padding: 0.7rem;
      box-shadow: 5px 4px 9px rgb(0 0 0 / 20%);
      svg {
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.5);
        margin-right: 0.5rem;
      }

      form {
        flex: 1;
      }

      input {
        font-size: 1.6rem;
        outline: none;
        border: none;
        ::placeholder {
          color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;

export default Home;
