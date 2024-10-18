import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementNumbers,
  incrementNumbers,
} from "./store/slice/numberSlice/numberSlice";

export default function App() {
  const dispatch = useDispatch();
  const numbers = useSelector((state) => state.numbers);

  return (
    <div>
      {numbers}
      <button onClick={() => dispatch(incrementNumbers(1))}>
        Increment by One
      </button>
      <button onClick={() => dispatch(incrementNumbers(2))}>
        Increment by Two
      </button>
      <button onClick={() => dispatch(decrementNumbers(1))}>
        Decrement by One
      </button>
    </div>
  );
}
