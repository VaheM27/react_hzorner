import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Jewelery = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios("https://fakestoreapi.com/products").then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Jewelery</h1>
    </div>

    // {data.map((item) => {
    //   return (
    //     <p>{item.title}</p>
    //   )
    // })}
  );
};

export default Jewelery;
