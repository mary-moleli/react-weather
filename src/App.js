import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Mary's React Weather</p>
        <Weather defaultCity="Istanbul" />
      </div>
    </div>
  );
}
