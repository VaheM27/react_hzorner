import React, { useContext } from "react";
import "./TodoBody.scss";
import { Context } from "../App";

const TodoBody = ({task}) => {

    let body = useContext(Context)
  return (
    <ul>
      {body.task.map((item) => {
        return (
          <li>
            {item.name}
            <button onClick={() => body.deleteTask(item.id)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoBody;
