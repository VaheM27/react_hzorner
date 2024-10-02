import { useEffect, useState } from "react";
import axios from "axios";

import "./App.scss";

const App = () => {
  const [city, setCity] = useState("Yerevan");
  const [data, setData] = useState([]);

  const getData = (city) => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba8608127335c6068af01ea8e811dad7`
    ).then((res) => setData([res.data]));
  };

  useEffect(() => {
    getData(city);
  }, [city]);

  const handleCklick = (e) => {
    e.preventDefault();
    const [input] = e.target;
    setCity(e.target[0].value);
    if (input.value) {
      input.value = "";
    }
  };

  return (
    <div>
      <nav>
        <form onSubmit={handleCklick}>
          <input type="text" placeholder="City name" />
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
