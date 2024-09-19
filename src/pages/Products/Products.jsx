import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");

  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  useEffect(() => {
    const getData = () => {
      axios(
        `https://fakestoreapi.com/products/category/${selectedCategory}?limit=100`
      ).then((res) => setProducts(res.data));
    };

    getData();
  }, [selectedCategory]);

  return (
    <div>
      <h1>Product Categories</h1>
      <div>
        {categories.map((category) => {
          return (
            <button
              className={`${category === selectedCategory ? "active" : ""} `}
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <Link to={`/products/${product.id}`}>Buy now</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
