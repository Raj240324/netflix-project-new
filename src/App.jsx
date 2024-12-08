import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <RoutesComponent />
      </Router>
    </>
  );
};

const RoutesComponent = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return routes;
};

export default App;
