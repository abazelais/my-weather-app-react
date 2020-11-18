import React, { useState } from "react";
import WeatherSearch from "./WeatherSearch";
import "./Weather.css";
import axios from "axios";



export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState ({ ready: false });
  const [cityName, setCityName] = useState (props.defaultCity);

  function responseHandle(response) {

    setWeatherInfo ({
      ready: true,
      temp: response.data.main.temp,
      city: response.data.name,
      date: new Date (response.data.dt * 1000),
      humidity: response.data.main.humidity,
      discription: response.data.weather[0].description,
      wind: response.data.wind.speed,
      //iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      icon: response.data.weather[0].icon

    });
  }

  function newSearch() {
    const apiKey = "4c6cd6bd5d47bc119ac820d821525e7e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(responseHandle);
  }

  function submitForm (event) {
    event.preventDefault();
    newSearch();
  }

  function handleChangeCity(event) {
    setCityName(event.target.value);
  }

  if(weatherInfo.ready) {

    return (
      <div className="weather-app">
        
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col-9">
              <input
              type="search"
              placeholder="Type the city..."
              autoFocus="on"
              autoComplete="off"
              className="form-control"
              onChange={handleChangeCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
          <WeatherSearch info={weatherInfo}/>
        
      </div>
    );

  } else {

    newSearch();

    return "Loading...";
  }
  
  
}