import React, { useReducer, useState } from "react";
import axios from "axios";
import "./App.css";

const initialState = {
  city: "",
  weather: null,
};

function weatherReducer(state, action) {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_WEATHER":
      return { ...state, weather: action.payload };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=ba8608127335c6068af01ea8e811dad7`
      )
      .then((response) => {
        dispatch({ type: "SET_WEATHER", payload: response.data });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_CITY", payload: inputValue });
    getWeather();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city name"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {state.weather && (
        <div className="weather-info">
          <h2>{state.weather.name}</h2>
          <p>
            Temperature: {(state.weather.main.temp - 273.15).toFixed(2)}°C /
            {(((state.weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)}°F
          </p>
          <p>Weather: {state.weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
