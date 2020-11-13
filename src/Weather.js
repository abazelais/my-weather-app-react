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
  //let cityName = "Boston";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(responseHandle);
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          
          <form>
            <div className="form-group">
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
                  <span className="temperature">
                    <span className="degrees">
                    {" "}
                    <strong>75</strong>
                  
                        °F
                    |
                  
                        °C
                    
                    </span>
                </span>
              </div>
            <div className="col-6">
              <ul>
                  <li>Precipitation: 5%</li>
                  <li>Humidity: 20%</li>
                  <li>Wind: 10mph</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        <p>
          <small>
        This project was coded by Amanda Carter and it is {" "}
        <a href="https://github.com/akcarter86/my-weather-app-react" 
          target="_blank" 
          rel="noopener noreferrer"> 
          open-sourced on GitHub</a>
         </small>
       </p>
    </div>
  );
}