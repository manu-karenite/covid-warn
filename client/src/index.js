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

//for redux store...
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Components/Reducers/rootReducer";
const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
