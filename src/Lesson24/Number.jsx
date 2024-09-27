import React from "react";
import { useNumberList } from "./useNumberList"; 
import './Number.css'
const NumberListApp = () => {
  const {
    list,
    addSeven,
    changeSecondToNine,
    deleteSecondElement,
    filterLessThanFour,
    resetList,
    clearList,
  } = useNumberList([1, 9, 3, 4, 5, 6, 7, 7, 7, 7]);

  return (
    <div className="app-container">
      <div className="list-display">{list.join(", ")}</div>
      <div className="button-group">
        <button onClick={addSeven}>Add 7</button>
        <button onClick={changeSecondToNine}>Change the second element to 9</button>
        <button onClick={deleteSecondElement}>Delete the second element</button>
        <button onClick={filterLessThanFour}>Leave the numbers less than 4</button>
        <button onClick={resetList}>Set 1, 2</button>
        <button onClick={clearList}>Clear</button>
      </div>
    </div>
  );
};

export default NumberListApp;
