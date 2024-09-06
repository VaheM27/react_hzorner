import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "./Detail.css"
const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className='product-detail'>
            <h2>{product.title}</h2>
            <img src={product.image} alt="hrh" />
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}$</p>
        </div>
    );
}

export default Detail;
