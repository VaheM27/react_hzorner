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
    const [changed, setChanged] = useState("celsius")

    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=ba8608127335c6068af01ea8e811dad7`)
            .then((res) => {
                disPatch({ type: "setWeather", payload: res.data })
                console.log(res.data)
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

    const changeFarentoC = (weather) => {
        return weather - 273.15
    }

    const changeTemp = (e) => {
        setChanged(e)
    }


    return (
        <div className='main'>
            <div className="navbar">
                <h1>WEATHER</h1>
                <input
                    type="text"
                    placeholder='Change Place'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleClick}>SEARCH</button>
                <div className="label">
                    <label htmlFor="">
                        C <input
                            type="radio"
                            name='weather'
                            onClick={() => changeTemp("celsius")}
                            defaultChecked
                        />
                    </label>
                    <label htmlFor="">
                        F <input
                            type="radio"
                            name='weather'
                            onClick={() => changeTemp("farenhait")}
                        />
                    </label>
                </div>
            </div>

            {state.weather && (
                <div className='weather'>
                    <p>{state.weather.name}</p>
                    <p>Temperature:
                        {changed === "celsius"
                            ? changeFarentoC(state.weather.main.temp).toFixed().concat(" C")
                            : state.weather.main.temp.toFixed().concat(" F")
                        }
                    </p>
                    <img src={`http://openweathermap.org/img/w/${state.weather.weather[0].icon}.png`} alt="" />
                    <p>{state.weather.weather[0].main}</p>
                </div>
            )}
        </div>
    )
}

export default App

