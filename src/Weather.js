import React from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <h1>Methuen, MA</h1>

          <ul>
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
              <a href="#" id="fahrenheit-link">
                  °F
              </a>
              |
              <a href="#" id="celsius-link">
                  °C
              </a>
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
    <span className="search-bar">
        <form id="search-form">
          <div className="form-group">
              <input
              type="search"
              placeholder="Type the city..."
              autoFocus="on"
              autoComplete="off"
              id="city-search"
              />
              <input type="button" value="Search" id="city" />
          </div>
        </form>
    </span>
      </div>
    </div>
</div>
  );
}