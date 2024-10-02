import { useContext, useEffect, useState } from "react";
import { Context } from "../Nav/Nav";
import axios from "axios";

import "./Sec.scss";

const Sec = () => {
  const { city, changeFarenToC, changed } = useContext(Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(
      `${process.env.REACT_APP_BASE_URL}${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((res) => setData([res.data]));
  }, [city]);

  return (
    <div className="Sec">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img
              src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
              alt=""
            />
            <p>
              {changed === "celsius"
                ? changeFarenToC(item.main.temp).toFixed(2).concat(" C")
                : item.main.temp.toFixed().concat(" F")}
            </p>
            <p>{item.weather[0].main}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sec;
