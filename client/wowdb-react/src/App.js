import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import SearchResults from "./components/Result.jsx";

let results = [];

function App() {
  const [searchResults, setSearchResults] = useState([]);

  function SearchIt(e) {
    console.log(e);
    if (e.length > 3) {
      const arr = e.split(" ");

      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }

      const str2 = arr.join(" ");
      console.log(str2);

      axios.post("http://localhost:9000/nexus", { name: str2 }).then((res) => {
        results = res;

        console.log(results);
        setSearchResults(results.data);
      });
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="imageHeader">
          <br></br> <br></br> <br></br> <br></br>
          <h1>Thunderfury.io</h1>
          <p id="headline">World of Warcraft: Classic Database</p>
          {/* <ShowResults></ShowResults> */}
          <SearchResults searchResults={searchResults}></SearchResults>
          <div class="container-search">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => SearchIt(e.target.value)}
                  type="email"
                  placeholder="Enter item..."
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
