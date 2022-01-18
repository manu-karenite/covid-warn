import "./App.css";
import { Fragment } from "react";

//importing routing in App.js
import { Link, Routes, Route } from "react-router-dom";

//importing utilities in the App.js
import Header from "./Components/Navigation/Header.js";
//importing pages on web App
import Home from "./Pages/Home.js";
import State from "./Pages/State.js";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/hii" exact element={<State />} />
      </Routes>
    </Fragment>
  );
}

export default App;
