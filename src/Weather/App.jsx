import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

import "./App.scss"

const initialState = {
    city: "Yerevan",
    weather: null
}

const weatherReducer = (state, action) => {
    switch (action.type) {
        case "setCity":
            return { ...state, city: action.payload };
        case "setWeather":
            return { ...state, weather: action.payload };
        default:
            return state
    }
}
const App = () => {
    const [state, disPatch] = useReducer(weatherReducer, initialState)
    const [inputValue, setInputValue] = useState("")

    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=ba8608127335c6068af01ea8e811dad7`)
            .then((res) => {
                disPatch({ type: "setWeather", payload: res.data })
            })
    }
    useEffect(() => {
        getWeather()
    }, [state.city])

    const handleClick = (e) => {
        e.preventDefault()
        disPatch({ type: "setCity", payload: inputValue })
        getWeather()
    }

    return (
        <div className='main'>
            <div className="navbar">
                <input
                    type="text"
                    placeholder='Change Place'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleClick}>SEARCH</button>
            </div>
            {state.weather && (
                <div className='weather'>
                    <p>{state.weather.name}</p>
                    <p>Tepmerature: {state.weather.main.temp}F</p>
                    <img src="" alt="" />
                    <p>{state.weather.weather[0].main}</p>
                </div>
            )}
        </div>
    )
}

export default App

