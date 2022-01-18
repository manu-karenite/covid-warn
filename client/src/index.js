import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//ACTIVATING ROUTING
import { BrowserRouter } from "react-router-dom";
//ADDING GLOBAL STYLINGS
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
//GLOBAL STYLINGS ADDED!

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
