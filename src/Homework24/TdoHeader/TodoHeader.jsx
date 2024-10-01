import React, { useContext } from "react";
import { Context } from "../App";

const TodoHeader = () => {
  let header = useContext(Context);

  return (
    <div>
      <form onSubmit={header.createTask}>
        <input type="text" />
        <button>Add</button>
      </form>
    </div>
  );
};
export default TodoHeader;
