import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <p className="name">Mary's React Weather</p>
        <Weather defaultCity="Istanbul" />

        <footer className="footer">
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/mary-moleli"
              target="_blank"
              rel="noreferrer"
            >
              Mary Moleli
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/mary-moleli/react-weather"
              target="_blank"
              rel="noreferrer"
            >
              on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://warm-khapse-8b6f94.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
