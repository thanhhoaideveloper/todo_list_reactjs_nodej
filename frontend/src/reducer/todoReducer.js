import { v4 as uuidv4 } from "uuid";

const initialTodos = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "TODO_FETCH": {
      return action.payload;
    }
    case "TODO_COMPLETE": {
      const newState = state.map((item) => {
        if (item._id === action.payload) {
          return { ...item, isCompleted: item.isCompleted ? false : true };
        }
        return item;
      });
      return newState;
    }
    case "TODO_ADD": {
      const newState = [{ id: uuidv4(), ...action.payload }, ...state];
      return newState;
    }
    case "TODO_DELETE": {
      const newState = state.filter((item) => item._id !== action.payload);
      return newState;
    }
    case "TODO_COMPLETE_ALL": {
      const newState = state.map((item) => {
        item.completed = true;
        return item;
      });
      return newState;
    }
    case "TODO_CLEAR_COMPLETE": {
      const newState = state.filter((item) => !item.completed);
      return newState;
    }
    case "TODO_UPDATE": {
      const newState = state.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });

      return newState;
    }
    default: {
      return state;
    }
  }
};

export { initialTodos, todoReducer };
