import "./App.css";
import React, { useState } from "react";
import { Navbar } from "./Component/Navbar";
import { TodoInput } from "./Component/Todos/TodoInput";
import { Todos } from "./Component/Todos/Todos";
import { useTodo } from "./context/TodoContext";

function App() {
  const [todoInput, setTodoinput] = useState("");
  const [editedTodo, setEditedTodo] = useState(null);

  const { todoList } = useTodo();
  const { TodoList } = todoList;
  return (
    <div>
      <Navbar />
      <TodoInput
        todoInput={todoInput}
        setTodoinput={setTodoinput}
        editedTodo={editedTodo}
        setEditedTodo={setEditedTodo}
      />
      <div className="allTodosContainer">
        <h1 className="title">All Todos ({TodoList?.length})</h1>
        {TodoList?.map((todos) => {
          return (
            <Todos
            key={todos.id}
              setTodoinput={setTodoinput}
              setEditedTodo={setEditedTodo}
              todos={todos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
