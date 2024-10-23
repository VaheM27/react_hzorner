import React, { useEffect, useState } from "react";
import instance from "./axios";
import axios from "axios";

import "./App.scss";

const App = () => {
  const selecter = ["posts", "comments", "albums", "todos"];
  const [option, setOption] = useState("posts");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getData = () => {
      // axios(`https://jsonplaceholder.typicode.com/${option}`, {
      //   params: {
      //     _limit: 10,
      //     _start: 10,
      //   },
      // })
      // axios({
      //   baseURL: "https://jsonplaceholder.typicode.com",
      //   url: option,
      //   params: {
      //     _limit: 10,
      //     _start: 50,
      //   },
      // })
      instance(option).then((res) => setInfo(res.data));
    };
    getData();
  }, [option]);

  console.log(option, info);

  const post = () => {
    const obj = {
      id: 1,
      name: "Bgdo",
      age: 25,
      isMarried: false,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", obj)
      .then((res) => {
        console.log(res);
      });
  };

  const handleClick = (option) => {
    setOption(option);
  };

  return (
    <ul>
      {selecter.map((elm, index) => {
        return (
          <li key={index} onClick={() => handleClick(elm)}>
            {elm}
          </li>
        );
      })}
      <button onClick={post}>Send</button>
    </ul>
  );
};

export default App;
