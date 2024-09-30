import { nanoid } from "nanoid";
import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: nanoid(10),
      task: "Էս աբարանցին երազ ա տենում, մոտիկանում ա տենում ա երազ չի, գազել ա",
    },
    { id: nanoid(10), task: "Մութը ընգնում ա , աբարանցին մնում ա տակը" },
    { id: nanoid(10), task: "Ապարանցին ճակատը քորում ա,ճակատագիրը ջնջվում ա" },
    {
      id: nanoid(10),
      task: "Կառալյոկը մտնում ա Ապարան,սաղին խեղդում դուրս ա գալիս",
    },
    {
      id: nanoid(10),
      task: "Ապարանցին երեխու անունը Արշակ ա ուզում դնի, երեխեն 7 ամսական ա ծնվում, անունը դնում ա Վաղարշակ",
    },
  ]);

  const addTodo = (task) => {
    setTodos([...todos, { id: nanoid(10), task }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
