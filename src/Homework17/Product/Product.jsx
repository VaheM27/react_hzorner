import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Product.scss";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, [id]);

  return (
    <div className="product">
      <div>
        <p>Product N {id}</p>
        <p>Category - {product.category}</p>
        <h2>{product.title}</h2>
        <p>Price {product.price} $</p>
        <img src={product.image} alt="" />
      </div>
      <button onClick={() => navigate(`/${+id - 1}`)} disabled={+id <= 1}>Prev</button>
      <button onClick={() => navigate(`/${+id + 1}`)} disabled={+id >= 20}>Next</button>
      <Link className="Link" to={`/`}>
        Go Back
      </Link>
    </div>
  );
};

export default Product;
