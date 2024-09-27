import React, { createContext, useState } from "react";
import One from "./One";

import "./App.scss";

export const Context = createContext();

const App = () => {
  const [data, setData] = useState(0);
  const handleClick = () => {
    setData(data + 1);
  };

  console.log(data);
  return (
    <div>
      <Context.Provider value={{ data, handleClick }}>
        <One />
      </Context.Provider>
    </div>
  );
};

export default App;
