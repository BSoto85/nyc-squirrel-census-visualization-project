import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";
import MapView from "./Pages/MapView";
import ChartsView from "./Pages/ChartsView";
import AboutTheDevs from "./Pages/AboutTheDevs";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/charts" element={<ChartsView />} />
        <Route path="/about" element={<AboutTheDevs />} />
      </Routes>
    </>
  );
};

export default App;
