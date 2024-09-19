import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../Routes";
import axios from "axios";

export const Product = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, [id]);

  return (
    <div className="product">
      <div>
        <h2>Welcome to the special products N {id}</h2>
        <h1>{product.title}</h1>
        <img src={product.image} alt="" />
      </div>
      <Link className="Link" to={`/${ROUTES.PRODUCTS}`}>
        Back to all products
      </Link>
    </div>
  );
};
