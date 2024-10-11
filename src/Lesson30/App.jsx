import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  function focus1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "green";
    inputRef2.current.style.backgroundColor = "";
  }

  function focus2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "green";
    inputRef1.current.style.backgroundColor = "";
  }

  useEffect(() => {
    console.log("Render");
  }, []);

  return (
    <div>
      {/* <p>{ref.current}</p> */}
      <input type="text" ref={inputRef1} />
      <button onClick={focus1}>Focus1</button>
      <input type="text" ref={inputRef2} />
      <button onClick={focus2}>Focus1</button>
    </div>
  );
}
