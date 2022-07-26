import React from "react";

const weatherCard = ({
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
}) => {
  const getTemp = (temp) => {
    return Math.round(temp - 273.15);
  };
  const iconURL = "https://openweathermap.org/img/wn/";
  const getIcon = (icon) => {
    return iconURL + icon + ".png";
    //console.log(iconURL + icon);
  };

  return (
    <div className="card">
      <div>
        <h1>{name}</h1>
        <h2 style={{ textAlign: "center" }}>{country}</h2>
      </div>
      <img src={getIcon(icon)} alt="icon" />
      <div className="h3text">
        <h3>Main : {main}</h3>
        <h3>Description : {description}</h3>

        <h3>Temperature :{getTemp(temp)} °C</h3>
        <h3>Humidity :{humidity} %</h3>
        <h3>Pressure :{pressure} N/m2</h3>
        <h3>Speed :{speed} km/hr</h3>
        <h3>Sea-level :{sea_level} APSL </h3>
      </div>
    </div>
  );
};
export default weatherCard;
