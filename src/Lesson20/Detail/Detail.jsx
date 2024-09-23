import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

import './Detail.scss'






const Detail = () =>{
    const [data,setData] = useState({})
    const { id } = useParams();
    useEffect(()=>{
        axios(`http://localhost:3000/products/${id}`).then(res=>setData(res.data))
    },[])

    return (
        <div className="maine">
            
            <div className="item">
            <p>{data.name}</p>
            <img src={data.image} alt="" />
            <p>{data.price}$</p>
            <span>Buy</span>
            </div>
            <Link to='/products'>Back</Link>

        </div>
    );
}

export default Detail