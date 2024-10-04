const initialState = [];

const todoReduce = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReduce;
