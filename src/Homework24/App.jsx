import { createContext, useState } from "react";
import TodoHeader from "./TdoHeader/TodoHeader";
import TodoBody from "./TodoBody/TodoBody";
import { nanoid } from "nanoid";

export const Context = createContext();

const App = () => {
  const [task, setTask] = useState([]);

  const createTask = (e) => {
    e.preventDefault();
    const [input] = e.target;
    const data = {
      id: nanoid(4),
      name: input.value,
    };
    if (input.value) {
      setTask([...task, data]);
      input.value = "";
    }
  };

  const deleteTask = (id) => {
    const newTasks = task.filter((item) => item.id !== id);
    setTask(newTasks);
  };
  return (
    <div>
      <Context.Provider value={{ createTask, deleteTask, task }}>
        <TodoHeader />
        <TodoBody />
      </Context.Provider>
    </div>
  );
};

export default App;
