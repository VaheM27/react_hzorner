import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Products.scss";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => setData(res.data));
  }, []);

  const sorting = () => {
    setData(data.toSorted((a, b) => a.price - b.price));
  };

  return (
    <div className="main">
      <button onClick={sorting}>Sort</button>
      {data.map((item) => {
        return (
          <div className="item" key={item.id}>
            <p>{item.name}</p>
            <img src={item.image} alt="" />
            <p>{item.price}$</p>
            <Link to={`/products/${item.id}`}>View Product</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
