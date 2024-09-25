import React from "react";
import useCount from "../hooks/useCount";
import useFetch from "../hooks/useFetch";
import useRandomNumbers from "../hooks/useRandomNumbers";

import "./App.scss";

export default function App() {
  const [count, { plus, minus }] = useCount({
    initialValue: 0,
    min: 0,
    max: 20,
  });

  const [data, loading] = useFetch({
    baseURL: "https://jsonplaceholder.typicode.com/",
    target: "posts",
  });

  const randomNumbers = useRandomNumbers({ randomCount: 26, min: 15, max: 90 });

  console.log(randomNumbers);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        );
      })}
      {loading ? <p>Data is Loading</p> : <p>Data is here</p>}
    </div>
  );
}
