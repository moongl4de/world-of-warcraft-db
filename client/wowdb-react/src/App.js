import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useState, setState } from "react";
import LandingPage from "./components/LandingPage";
import BiSList from "./components/BiSList.jsx";
import "./App.css";

function ClassParams() {
  // Get the userId param from the URL.
  let { classSelected } = useParams();
  // ...
}

function App() {
  const [classSelected, setClassSelected] = useState("");
  const [specSelected, setSpecSelected] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage
            classSelected={classSelected}
            setClassSelected={setClassSelected}
            specSelected={specSelected}
            setSpecSelected={setSpecSelected}
          />
        }
      ></Route>
      <Route
        path="bis/:classSelectedURL"
        element={
          <BiSList
            classSelected={classSelected}
            setClassSelected={setClassSelected}
            specSelected={specSelected}
            setSpecSelected={setSpecSelected}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
