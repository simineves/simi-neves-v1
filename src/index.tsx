import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import ReactGA from "react-ga";

ReactGA.initialize("UA-120902712-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
