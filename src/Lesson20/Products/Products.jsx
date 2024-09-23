import axios from 'axios'
import './Products.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'





const Products = () =>{
    const [data,setData] = useState([])
    
    axios('http://localhost:3000/products').then(res=>setData(res.data))

    const sorting = () =>{
        const newData = data.sort((a,b)=>a.price - b.price)
        setData(newData)
    }


    return(
        <div className='main'>
            <button onClick={sorting}>Sort</button>
            {
                data.map((item)=>{
                    return(
                        <div className='item' key={item.id}>
                            <p>{item.name}</p>
                            <img src={item.image} alt="" />
                            <p>{item.price}$</p>
                            <Link to={`/products/${item.id}`}>View Product</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products