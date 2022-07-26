import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const createTodoContext = createContext();
const useTodo = () => useContext(createTodoContext);
const TodoProvider = ({ children }) => {
  const [todoList, todoDispatch] = useReducer(todoReducer, { TodoList: [] });
  return (
    <createTodoContext.Provider value={{ todoList, todoDispatch }}>
      {children}
    </createTodoContext.Provider>
  );
};

export { useTodo, TodoProvider };
