import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Detaliss/detalis.css';  

const Details = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="productImage" />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
};

export default Details;
