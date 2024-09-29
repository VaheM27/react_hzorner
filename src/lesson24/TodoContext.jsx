import { nanoid } from 'nanoid';
import React, { createContext, useState } from 'react';


export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Էս աբարանցին երազ ա տենում, մոտիկանում ա տենում ա երազ չի, գազել ա" },
    { id: 2, task: 'Մութը ընգնում ա , աբարանցին մնում ա տակը' },
    { id: 3, task: 'Ապարանցին ճակատը քորում ա,ճակատագիրը ջնջվում ա' },
    { id: 4, task: 'Կառալյոկը մտնում ա Ապարան,սաղին խեղդում դուրս ա գալիս' },
    { id:5, task: 'Ապարանցին երեխու անունը Արշակ ա ուզում դնի, երեխեն 7 ամսական ա ծնվում, անունը դնում ա Վաղարշակ' },
  ]);


  const addTodo = (task) => {
    setTodos([...todos, { id: nanoid, task }]);
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
