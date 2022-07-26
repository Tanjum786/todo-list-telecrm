import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useTodo } from "../../context/TodoContext";

export const Todos = ({ setTodoinput, setEditedTodo, todos }) => {
  const { todoList, todoDispatch } = useTodo();
  const { TodoList } = todoList;

  const EditTodoHandler = (todos) => {
    const editTodo = TodoList.find((todo) => todo.id === todos.id);
    if (editTodo) {
      setTodoinput(editTodo.todo);
      setEditedTodo(editTodo);
    }
  };

  return (
    <>
      <div className="todosContainer" key={todos.id}>
        <p className="todosContaint">{todos.todo}</p>
        <div className="btnContainer">
          <button className="btns" onClick={() => EditTodoHandler(todos)}>
            <BsPencilSquare />
          </button>
          <button
            className="btns"
            onClick={() =>
              todoDispatch({ type: "DELETE-TODO", payload: todos })
            }
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};
