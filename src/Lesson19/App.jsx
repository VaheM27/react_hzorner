import React, { useReducer } from "react";
import reducer, { initialValue } from "./reducer";
import { PLUS, PUSH, SORT } from "./actionTypes";

import "./App.scss";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleIncrement = () => {
    dispatch({ type: PLUS, payload: 4 });
  };

  const handleDecrement = () => {
    dispatch({ type: "minus" });
  };

  const handleAdd = () => {
    dispatch({ type: PUSH, payload: Math.round(Math.random() * 100) });
  };

  const handleSort = () => {
    dispatch({ type: SORT, payload: "desc" });
  };
  return (
    <div>
      <h1>State: {JSON.stringify(state)}</h1>
      {/* <button onClick={handleIncrement}>Incremenet</button> */}
      {/* <button onClick={handleDecrement}>Decrement</button> */}
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSort}>Sort</button>
    </div>
  );
};

export default App;
