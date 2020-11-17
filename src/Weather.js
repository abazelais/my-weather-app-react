import React, { useState } from "react";
//import CurrentDate from "./CurrentDate";
import "./Weather.css";
import axios from "axios";



export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState ({ ready: false });
  //const [cityName, setCityName] = useState ({ });

  function responseHandle(response) {
    console.log(response.data);
    setWeatherInfo ({
      ready: true,
      temp: response.data.main.temp,
      //city: response.data.city.name,
      humidity: response.data.main.humidity,
      discription: response.data.weather[0].description,
      wind: response.data.main.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"

    });
  }

  if(weatherInfo.ready) {

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
        
        <h1>{weatherInfo.city}</h1>
  
        <ul>
          <li>Friday, 10:00</li>
          <li className="text-capitalize"> {weatherInfo.description} </li>
        </ul>
  
        <div className="row">
          <div className="col-6">
            <img className="image-icon"
                src={weatherInfo.iconUrl}
                alt={weatherInfo.description}
            />
              <span className="temperature"><strong>{weatherInfo.temp}</strong></span>
                <span className="degrees">
                {" "}
                  °F|°C
                </span>
          </div>
          <div className="col-6">
            <ul>
                <li>Humidity: {weatherInfo.humidity}%</li>
                <li>Wind: {weatherInfo.wind}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );

  } else {
    const apiKey = "9806641a884960bc13a3323dc628066b";
    let city = "Boston";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(responseHandle);

    return "Loading...";
  }
  
  
}