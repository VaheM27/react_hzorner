import React, { useEffect, useReducer } from "react";
import reducer, { initialValue } from "./reducer";
import axios from "axios";

import "./App.scss";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: 10,
        _start: 50,
      },
    }).then((res) => dispatch({ type: "addPosts", payload: res.data }));
  }, []);

  return (
    <div className="App">
      <code>{JSON.stringify(state, null, 1)}</code>
      <button onClick={() => dispatch({ type: "changeID" })}>Change ID</button>
      <button onClick={() => dispatch({ type: "deleteID", payload: 15 })}>
        Delete ID
      </button>
    </div>
  );
};

export default App;
