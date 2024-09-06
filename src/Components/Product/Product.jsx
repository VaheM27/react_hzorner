import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        axios("https://fakestoreapi.com/products", {
        }).then(res => setProducts(res.data));
    }, []);

    const sortProducts = () => {
        let sortedProducts;

        if (sorted) {
            sortedProducts = [...products].sort((a, b) => b.title.localeCompare(a.title));
        } else {
            sortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));
        }

        setProducts(sortedProducts);
        setSorted(!sorted);
    };

    return (
        <div className='container'>
            <button className="sort-button" onClick={sortProducts}>
                Sort {sorted ? "Z-A" : "A-Z"}
            </button>
            {products.map((item) => (
                <div className="box" key={item.id}>
                    <p>{item.title}</p>
                    <img src={item.image} alt={item.category} />
                    <p>{item.price}$</p>
                    <Link to={`/products/${item.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default Products;
