import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
      <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
          <input type="search" placeholder="Enter a city..." className="form-control" />
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" /> 
           </div>
           </div>
        </form>
        <h1>Istanbul</h1>
        <ul>
          <li>Friday 02:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyCloudyNightV2.svg"
              alt="Mostly Cloudy"
            />
            12°C
          </div>
          <div className="col-6">
            <ul>
                <li>Precipitation: 16%</li>
                <li>Humidity: 82%</li>
                <li>Wind: 14km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
}