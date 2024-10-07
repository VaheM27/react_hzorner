import { nanoid } from "nanoid";

const initialState = {
    todos: []
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          todos: [...state.todos, { id: nanoid(), title: action.payload, completed: false }]
        };
      
      case 'DELETE':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
  
      case 'TOGGLE':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;
  