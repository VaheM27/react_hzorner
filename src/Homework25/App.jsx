import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import "./App.scss";

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba8608127335c6068af01ea8e811dad7`
    ).then((res) => setData([res.data]));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleCklick = (e) => {
    e.preventDefault();
    const [input] = e.target;
    console.log(e.target[0].value);
    if (input.value) {
      input.value = "";
    }
  };

  return (
    <div>
      <nav>
        <form onSubmit={handleCklick}>
          <input type="text" placeholder="City name" onChange={handleChange} />
          <input type="submit" value="Search City" />
        </form>
      </nav>

      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.main.temp}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
