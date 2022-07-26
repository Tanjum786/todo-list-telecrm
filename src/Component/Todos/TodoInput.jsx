import React from "react";
import { v4 as uuid } from "uuid";
import { useTodo } from "../../context/TodoContext";
import "./todos.css";

export const TodoInput = ({
  todoInput,
  setTodoinput,
  editedTodo,
  setEditedTodo,
}) => {
  const { todoDispatch } = useTodo();

  const inputHandler = (e) => {
    setTodoinput(e.target.value);
  };
  const addTodoHandler = () => {
    if (editedTodo) {
      if (todoInput.trim().length > 0) {
        todoDispatch({
          type: "EDIT-TODO",
          payload: { id: editedTodo.id, todo: todoInput },
        });
        setTodoinput("");
        setEditedTodo(null);
      }
    } else {
      if (todoInput.trim().length > 0) {
        todoDispatch({
          type: "ADD-TO-TODO",
          payload: { id: uuid(), todo: todoInput },
        });
        setTodoinput("");
      }
    }
  };

  return (
    <>
      <div className="todoInputContainer">
        <h1 className="createTodoTitle">Create Todos</h1>
        <div>
          <input
            type="text"
            placeholder="type your todos here..."
            value={todoInput}
            onChange={(e) => inputHandler(e)}
            className="inputFiled"
          />
          <button className="addBtn" onClick={addTodoHandler}>
            {editedTodo ? "Update Todo" : "Add Todo"}
          </button>
        </div>
      </div>
    </>
  );
};
