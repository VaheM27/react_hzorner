export const addTodo = (title) => {
    return {
      type: 'ADD',
      payload: title
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE',
      payload: id
    };
  };
  
  export const toggleTodo = (id) => {
    return {
      type: 'TOGGLE',
      payload: id
    };
  };
  