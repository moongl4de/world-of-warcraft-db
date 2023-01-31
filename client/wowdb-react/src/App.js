import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/bis" element={<p>Hello</p>}></Route>
    </Routes>
  );
}

export default App;
