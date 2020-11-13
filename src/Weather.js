import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import "./Weather.css";
import axios from "axios";



export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState ({ ready: false });
  const [cityName, setCityName] = useState ({ });

  function responseHandle(response) {
    setWeatherInfo ({
      ready: true,

    })
  }
  const apiKey = "9806641a884960bc13a3323dc628066b";
  let city = "Boston";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(responseHandle);
  return (
    <div className="weather-app">
      
      <form>
        <div className="row">
          <div className="col-9">
            <input
            type="search"
            placeholder="Type the city..."
            autoFocus="on"
            autoComplete="off"
            className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      
      <h1>Malden</h1>

      <ul>
        <li><CurrentDate /></li>
        <li>Clear</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
          />
            <span className="temperature"><strong>75</strong></span>
              <span className="degrees">
              {" "}
                °F|°C
              </span>
        </div>
        <div className="col-6">
          <ul>
              <li>Humidity: 20%</li>
              <li>Wind: 10mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}