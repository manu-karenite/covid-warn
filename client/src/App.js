import "./App.css";
//importing React Components
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//importing utilities in the App.js
const Header = lazy(() => import("./Components/Navigation/Header.js"));
const SideMenu = lazy(() => import("./Components/Navigation/SideMenu.js"));
const Title = lazy(() => import("./Components/Navigation/Title.js"));

//importing pages on web App
const Home = lazy(() => import("./Pages/Home.js"));
const State = lazy(() => import("./Pages/State.js"));

function App() {
  const { state } = useSelector((state) => ({ ...state }));
  return (
    <Suspense fallback={`Loading in Progress!`}>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideMenu />
          </div>
          <div className="col-md-10">
            {!state && <Title />}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/state/:state_code" exact element={<State />} />

              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
