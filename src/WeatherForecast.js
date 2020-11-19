import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastInput from "./WeatherForecastInput";

export default function WeatherForecast(props) {

	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function forecastResponse(response) {
		setForecast(response.data);
		setLoaded(true);

	}
	
	if(loaded && props.city === forecast.city.name) {
		
  return  (
    <div className="WeatherForecasting row">
      <div className="col">
        <WeatherForecastInput data={forecast.list[0]}/>
        <WeatherForecastInput data={forecast.list[1]}/>
        <WeatherForecastInput data={forecast.list[2]}/>
        <WeatherForecastInput data={forecast.list[3]}/>
        <WeatherForecastInput data={forecast.list[4]}/>
        <WeatherForecastInput data={forecast.list[5]}/>

      </div>
    </div>
  );

	} else{

			let apiKey = "4c6cd6bd5d47bc119ac820d821525e7e";
			let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
			axios.get(apiUrl).then(forecastResponse);

		return null;

	}
}
