import { useContext } from "react";
import { Context } from "./App";

export default function Three() {
  let number = useContext(Context);
  console.log("Three");

  return (
    <div>
      <h1>Component Three</h1>
      <p>Number : {number.data}</p>
      <button onClick={number.handleClick}>Incremenet</button>
    </div>
  );
}
