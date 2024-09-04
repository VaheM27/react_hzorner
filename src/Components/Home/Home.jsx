import { useEffect, useState } from "react"
import axios from "axios"

import './Home.scss'
import { Link, NavLink } from "react-router-dom"
import ROUTES from "../../Routes"



const Home = () => {

    const selector = ['users', 'products']
    const [option, setOption] = useState('products')
    const [info,setInfo] = useState([])

    useEffect(()=>{
        const getData = () => axios(`https://fakestoreapi.com/${option}?limit=5`).then(res=>setInfo(res.data))
        getData()
    },[option])
    
    const handleClick = (item)=>{
        setOption(item)
        console.log(info)
    }
    
    return (
        <div>
            <ul>
                {selector.map((elm, index) => {
                    return (
                        <li key={index} onClick={()=>handleClick(elm)}>{elm}</li>
                    )
                })}

            </ul>
            <div className="section">
            {
                info.map((elm,index)=>{
                    return(
                            <div className="product" key={index}>
                            <p className="title">{elm.username||elm.category}</p>
                            {elm.name? <p>{elm.name['firstname']}</p>:<img src={elm.image} alt="" />}
                            <p>{elm.name?elm.name['lastname']:elm.description}</p>
                            <p>{elm.email?elm.email:elm.price+'$'}</p>
                            <Link to={ROUTES.SHOW}>Open</Link>                            
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home