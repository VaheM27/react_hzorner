import { createContext, useState } from "react";
import Sec from "../Sec/Sec";

import "./Nav.scss";

export const Context = createContext();

const Nav = () => {
  const [city, setCity] = useState("Yerevan");
  const [changed, setChanged] = useState("celsius");
  const search = (e) => {
    e.preventDefault();
    setCity(e.target[0].value);
    e.target.reset();
  };

  const changeFarenToC = (weather) => {
    return weather - 273.15;
  };

  const changeTemp = (e) => {
    setChanged(e);
  };

  return (
    <div className="mainNav">
      <form onSubmit={search}>
        <input type="text" placeholder="Search City" />
        <button type="Submit">Search City</button>
        <label htmlFor="">
          C
          <input
            type="radio"
            name="weather"
            onClick={() => changeTemp("celsius")}
            defaultChecked
          />
        </label>
        <label htmlFor="">
          F
          <input type="radio" name="weather" onClick={() => changeTemp("farenhait")} />
        </label>
      </form>
      <Context.Provider value={{ city, changeFarenToC, changed }}>
        <Sec />
      </Context.Provider>
    </div>
  );
};

export default Nav;
