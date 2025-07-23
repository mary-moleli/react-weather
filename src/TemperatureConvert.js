import React, { useState } from "react";

export default function TemperatureConvert(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function toFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TempConvert">
        <span className="temperature">{props.celsius}°C</span>
        <span className="unit">
          °C |{" "}
          <a href="#" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TempConvert">
        <span className="temperature">{Math.round(toFahrenheit())}°F</span>
        <span className="unit">
          <a href="#" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
