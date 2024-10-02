import { useContext, useEffect, useState } from "react"
import { context } from "../Nav/Nav"
import axios from "axios"
import './Sec.scss'


const Sec = () =>{

    const city = useContext(context)
    const [data,setData] = useState([])
    

    useEffect(()=>{
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba8608127335c6068af01ea8e811dad7`).then(res=>setData([res.data]))
    },[city])


    console.log(city)
    return( 
        <div className="Sec">
            {data.map((item)=>{
                return(
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <i className={item.weather[0].icon}></i>
                        <p>{item.main.temp}</p>
                        <p>{item.weather[0].main}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Sec