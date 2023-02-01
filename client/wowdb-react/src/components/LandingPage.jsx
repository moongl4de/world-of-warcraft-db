import Form from "react-bootstrap/Form";
import { useState, setState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import axios from "axios";
import wowLogo from "../assets/wow-transparent.png";
import priestIcon from "../assets/icon-priest.webp";
// import SearchResults from "./components/Result.jsx";

let results = [];

function LandingPage() {
  function setClassClick(e, pickedClass) {
    e.preventDefault();
    console.log(pickedClass);
    setClassSelected(pickedClass);
  }
  const [classSelected, setClassSelected] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="landingPageHeader">
          <Container fluid className="backgroundOverlay ">
            <img id="wowLogo" src={wowLogo} alt="asd" />
            <h2>Best in Slot List</h2>
            <h5>- Select Your Class -</h5>
            <hr style={{ margin: "50px" }} />
            {/* <i>{classSelected}</i> */}
            <Row
              className="justify-content-center topRow"
              style={{ marginTop: "5px" }}
            >
              <Col
                onClick={(e) => {
                  setClassClick(e, "Priest");
                }}
                sm={6}
                md={2}
                lg={2}
                id="priestButton"
                className="itemDiv btn"
              >
                Priest
              </Col>
              <Col
                onClick={(e) => {
                  setClassClick(e, "Warrior");
                }}
                sm={6}
                md={2}
                lg={2}
                id="warriorButton"
                className="itemDiv btn"
              >
                Warrior
              </Col>
              <Col
                onClick={(e) => {
                  setClassClick(e, "Hunter");
                }}
                sm={6}
                md={2}
                lg={2}
                id="hunterButton"
                className="itemDiv btn"
              >
                Hunter
              </Col>
              <Col
                onClick={(e) => {
                  setClassClick(e, "Warlock");
                }}
                sm={6}
                md={2}
                lg={2}
                id="warlockButton"
                className="itemDiv btn"
              >
                Warlock
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col
                onClick={(e) => {
                  setClassClick(e, "Mage");
                }}
                sm={12}
                md={2}
                lg={2}
                id="mageButton"
                className="itemDiv btn"
              >
                Mage
              </Col>
              <Col
                onClick={(e) => {
                  setClassClick(e, "Rogue");
                }}
                sm={12}
                md={2}
                lg={2}
                id="rogueButton"
                className="itemDiv btn"
              >
                Rogue
              </Col>
              <Col
                onClick={(e) => {
                  setClassClick(e, "Druid");
                }}
                sm={12}
                md={2}
                lg={2}
                id="druidButton"
                className="itemDiv btn"
              >
                Druid
              </Col>
              <Col
                onClick={(e) => {
                  setClassClick(e, "Paladin");
                }}
                sm={12}
                md={2}
                lg={2}
                id="paladinButton"
                className="itemDiv btn"
              >
                Paladin
              </Col>
            </Row>{" "}
            <br /> <br />
          </Container>
        </div>

        {/* <div id="imageHeader">
      <h1>Thunderfury.io</h1>
      <p id="headline">World of Warcraft: Classic Database</p>
   
      <div class="container-search">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => SearchIt(e.target.value)}
              type="email"
              placeholder="Enter item..."
            />
          </Form.Group>
          <SearchResults searchResults={searchResults}></SearchResults>
        </Form>


      </div>
    </div> */}
      </header>
    </div>
  );
}

export default LandingPage;
