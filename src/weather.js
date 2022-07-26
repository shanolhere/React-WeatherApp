import React, { useState, useEffect } from "react";
import WeatherCard from "./weatherCard.js";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Machilipatnam");

  const [tempInfo, setTempInfo] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=3045dd712ffe6e702e3245525ac7fa38`;

  const getWeatherInfo = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);
      const { temp, pressure, humidity, sea_level } = data["main"];
      const { speed } = data["wind"];
      const { country } = data["sys"];
      const { name } = data;
      //console.log(name);
      const { main, description, icon } = data["weather"][0];

      const weatherObj = {
        temp,
        pressure,
        humidity,
        sea_level,
        speed,
        country,
        name,
        main,
        description,
        icon
      };
      setTempInfo(weatherObj);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="container">
      <header>
        <h3>Welcome to weatherApp</h3>
      </header>
      <div className="fluid-container">
        <div className="inputbox">
          <input
            type="text"
            className="text"
            value={searchValue}
            placeholder="Enter city here..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="search" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
        <WeatherCard {...tempInfo} />
      </div>
    </div>
  );
};
export default Weather;
