import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./Products.scss"

const Products = () => {
    const [product, setProduct] = useState([])
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        axios("https://fakestoreapi.com/products", {
            params: {
                _limit: 10,
            }
        }).then(res => setProduct(res.data))
    }, [])

    const sortProducts = () => {
        let sortedProducts;

        if (sorted) {
            sortedProducts = [...product].sort((a, b) => b.title.localeCompare(a.title));
        } else {
            sortedProducts = [...product].sort((a, b) => a.title.localeCompare(b.title));
        }

        setProduct(sortedProducts);
        setSorted(!sorted);
    };


    return (
        <div className='container mainPro'>
            <button className="sort" onClick={sortProducts}>
                SortProduct {sorted ? "Z-A" : "A-Z"}
            </button>
            {product.map((item) => {
                return (
                    <div className="boxPro" key={item.id}>
                        <p>{item.title}</p>
                        <img src={item.image} alt={item.category} />
                        <p>{item.price}$</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Products
