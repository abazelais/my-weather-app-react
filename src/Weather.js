import React from "react";
import "./Weather.css";


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
        <span className="search-bar">
          <form id="search-form">
            <div className="form-group">
              <div className="row">
                <div className="col-9">
                  <input
                  type="search"
                  placeholder="Type the city..."
                  autoFocus="on"
                  autoComplete="off"
                  id="city-search"
                  />
                </div>
                <div className="col-3">
                  <input type="button" value="Search" className="btn btn-primary w-100" />
                </div>
              </div>
            </div>
          </form>
        </span>
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