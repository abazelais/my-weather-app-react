import React, { useState } from "react";

export default function UnitsOfTemperature(props) {
  const [units, setUnits] = useState('fahrenheit');

  function displayCelsius(event) {
    event.preventDefault();
    setUnits("celsius");

  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function celsiusTemp() {
    return (props.fahrenheit - 32) * 5/9;
  } 

  if(units === "fahrenheit") {
    return (
    <div className="unitsOfTemp">
      <span className="temperature"><strong>{Math.round(props.fahrenheit)}</strong></span>
        <span className="degrees">
          °F |{" "} 
          <a href="/" onClick={displayCelsius}>
            °C
          </a> 
        </span>
    </div>

    );
    
  } else {
    return (
      <div className="unitsOfTemp">
        <span className="temperature"><strong>{Math.round(celsiusTemp())}</strong></span>
          <span className="degrees">
            <a href="/" onClick={displayFahrenheit}>
              °F
              </a>{" "}
              | °C 
          </span>
      </div>
    );
  }

}