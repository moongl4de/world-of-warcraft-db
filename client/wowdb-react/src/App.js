import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useState, setState } from "react";
import LandingPage from "./components/LandingPage";
import BiSList from "./components/BiSList.jsx";
import Edit from "./components/Edit.jsx";
import "./App.css";

function ClassParams() {
  // Get the userId param from the URL.
  let { classSelected } = useParams();
  // ...
}

function App() {
  const [selectedItem, setSelectedItem] = useState("");
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
      <Route
        path="edit"
        element={
          <Edit
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
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
