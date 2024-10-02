import React, { useContext, useState } from "react";
import { TodoContext, TodoProvider } from "./TodoContext";
import "./App.css";

const TodoList = () => {
  const { todos, deleteTodo } = useContext(TodoContext);
  console.log(todos);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          {todo.task}
          <button onClick={() => deleteTodo(todo.id)} className="delete-button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const AddTodo = () => {
  const [newTask, setNewTask] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTodo(newTask);
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};
function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1 className="title">To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
