import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "react-jss";
import guidelines from "@zlab-de/zel-react/guidelines.json";
import * as serviceWorker from "./serviceWorker";
import "@zlab-de/zel-react/zel.css";
import "./index.css";
import "./i18n/i18n";

ReactDOM.render(
  <ThemeProvider theme={guidelines}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
