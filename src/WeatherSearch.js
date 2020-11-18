import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import UnitsOfTemperature from "./UnitsOfTemperature";



export default function WeatherSearch(props) {
  return (
    <div className="weatherSearch">

      <h1>{props.info.city}</h1>

      <ul>
          <li><CurrentDate date={props.info.date}/></li>
          <li className="text-capitalize"> {props.info.description} </li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">

            <div className="float-left">
                <WeatherIcon code={props.info.icon}/>
            </div>

            <div className="float-left">
              <UnitsOfTemperature fahrenheit={props.info.temperature}/>
            </div>
            
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}