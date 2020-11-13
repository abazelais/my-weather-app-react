import React from 'react';
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="Container">
      <Weather />
      </div>
      <footer>
        <small>
          This project was coded by Amanda Carter and it is {" "}
          <a href="https://github.com/akcarter86/my-weather-app-react" 
            target="_blank" 
            rel="noopener noreferrer"> 
            open-sourced on GitHub</a>
        </small>
      </footer>
    </div>
  );
}


