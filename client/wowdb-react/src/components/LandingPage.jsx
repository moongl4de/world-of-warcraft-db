import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import axios from "axios";
import wowLogo from "../assets/wow-transparent.png";
// import SearchResults from "./components/Result.jsx";

let results = [];

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="landingPageHeader">
          <Container fluid className="backgroundOverlay ">
            <img id="wowLogo" src={wowLogo} alt="asd" />
            <h1>Best in Slot List</h1>
            <p>Select Your Class</p>
            <hr style={{ margin: "50px" }} />
            <Row className="justify-content-around topRow">
              <Col
                sm={12}
                md={3}
                lg={3}
                id="priestButton"
                className="itemDiv btn"
              >
                Priest
              </Col>
              <Col
                sm={12}
                md={3}
                lg={3}
                id="warriorButton"
                className="itemDiv btn"
              >
                Warrior
              </Col>
              <Col
                sm={12}
                md={3}
                lg={3}
                id="hunterButton"
                className="itemDiv btn"
              >
                Hunter
              </Col>
              <Col
                sm={12}
                md={3}
                lg={3}
                id="warlockButton"
                className="itemDiv btn"
              >
                Warlock
              </Col>
            </Row>
            <Row className="justify-content-around ">
              <Col
                sm={12}
                md={3}
                lg={3}
                id="mageButton"
                className="itemDiv btn"
              >
                Mage
              </Col>
              <Col
                sm={12}
                md={3}
                lg={3}
                id="rogueButton"
                className="itemDiv btn"
              >
                Rogue
              </Col>
              <Col
                sm={12}
                md={3}
                lg={3}
                id="druidButton"
                className="itemDiv btn"
              >
                Druid
              </Col>
              <Col
                sm={12}
                md={3}
                lg={3}
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
