import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {

	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function forecastResponse(response) {
		setLoaded(true);
		setForecast(response.data);

	}
	
	if(loaded) {
		
		return  (
			<div className="WeatherForecasting">
				8:00
				<WeatherIcon code={forecast.list[0].weather[0].icon}/>
				{Math.round(forecast.list[0].main.temp)}°F

			</div>
		)

	} else{

			let apiKey = "4c6cd6bd5d47bc119ac820d821525e7e";
			let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
			axios.get(apiUrl).then(forecastResponse);

		return null;

	}
}
