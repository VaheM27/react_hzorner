import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../axios";

import './Products.scss'


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   instance().then((res) => setProducts(res.data))
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="main">
        {products.map((item) => {
          return (
            <Link className="item" key={item.id} to={`${item.id}`}>
              <p>{item.title}</p>
              <img src={item.image} alt="" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products