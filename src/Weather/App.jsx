import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const Context = createContext()
const App = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=ba8608127335c6068af01ea8e811dad7`)
            .then((res) => setState([res.data]))
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        
    }



    return (
        <div>
            <input type="text" placeholder='Search the place' />
            <button>Chanage Place</button>
            {state.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.main.temp}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default App
