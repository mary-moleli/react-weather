import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormateDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      iconUrl: response.data.condition.icon_url,
    });
  }
  function search() {
    const apiKey = "f437a67519o9abbba5b8c7t03f34cda0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <h1>
          {weatherData.city},{weatherData.country}
        </h1>
        <ul>
          <li>
            <FormatDate date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyCloudyNightV2.svg"
              alt="Mostly Cloudy"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
