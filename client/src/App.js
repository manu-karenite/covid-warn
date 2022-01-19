import "./App.css";
import { Fragment } from "react";

//importing routing in App.js
import { Link, Routes, Route } from "react-router-dom";

//importing utilities in the App.js
import Header from "./Components/Navigation/Header.js";
import SideMenu from "./Components/Navigation/SideMenu.js";
//importing pages on web App
import Home from "./Pages/Home.js";
import State from "./Pages/State.js";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideMenu />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/state/:state_code" exact element={<State />} />
            </Routes>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
