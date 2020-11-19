import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastInput (props) {

  function forecastTime() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();

    return `${hours}:00`;
  }

  function forecastTemp() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°F`;

  }
  return (
    <div className="WeatherForecastInput col">
      {forecastTime()}
      <WeatherIcon code = {props.data.weather[0].icon}/>
      {forecastTemp()}
    </div>
  );
}