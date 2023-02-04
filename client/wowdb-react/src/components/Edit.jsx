import { React, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SearchResults from "./SearchResults";

function Edit({ selectedItem, setSelectedItem }) {
  console.log("Selected Item: ", selectedItem);
  const [searchResults, setSearchResults] = useState([]);

  //   useEffect(() => {}, []);

  function SearchIt(value) {
    if (value.length > 3) {
      var data = JSON.stringify({
        name: value,
      });
      var config = {
        method: "post",
        url: "http://localhost:9000/nexus/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          setSearchResults(response.data);
          console.log(searchResults);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <div>
      <div className="container-search">
        <Form>
          <Form.Group className="mb-3" controlId="head">
            <Form.Control
              onChange={(e) => SearchIt(e.target.value)}
              type="email"
              placeholder="Enter item..."
            />
            <SearchResults
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
              searchResults={searchResults}
            />
          </Form.Group>
          {/* <SearchResults searchResults={searchResults}></SearchResults> */}
        </Form>
      </div>
      <Container style={{ maxWidth: "500px", marginTop: "300px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Head</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Neck</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Edit;
