import React from "react";

import "./App.scss";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.countReducer);
  console.log(count);

  return (
    <div>
      <p>Redux</p>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "inc", payload: 3 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
    </div>
  );
}
