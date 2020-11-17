import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";



export default function WeatherSearch(props) {
    return (
        <div className="weatherSearch">

          <h1>{props.info.city}</h1>
  
          <ul>
              <li><CurrentDate date={props.date}/></li>
              <li className="text-capitalize"> {props.info.description} </li>
          </ul>

          <div className="row">
            <div className="col-6">
                <div className="float-left">
                    <WeatherIcon 
                    code={props.info.icon} 
                    alt={props.info.description}
                    />
                </div>
            <img className="image-icon"
                src={props.info.iconUrl}
                alt={props.info.description}
            />
                <span className="temperature"><strong>{props.info.temp}</strong></span>
                <span className="degrees">
                {" "}
                    °F|°C
                </span>
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