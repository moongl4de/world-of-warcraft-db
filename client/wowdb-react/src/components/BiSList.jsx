import Form from "react-bootstrap/Form";
import { useState, setState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../App.css";
import axios from "axios";
import wowLogo from "../assets/wow-transparent.png";
import { useNavigate, Link, useParams } from "react-router-dom";
import Item from "../components/Item";
import priestIcon from "../assets/icon-priest.webp";

const params = new URLSearchParams(window.location.pathname);

function BiSList({ setClassSelected, classSelected }) {
  const { classSelectedURL } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // Update the document title using the browser API
    if (classSelected == "") {
      navigate("/");
    }
  }, []);

  function Specs() {
    switch (classSelectedURL) {
      case "Warrior":
        return (
          <Row className="justify-content-between">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col sm={12} md={2} lg={2}>
              <button className="specBtn">Protection</button>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <button className="specBtn">Fury</button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        );
      case "Priest":
        return (
          <Row class="justify-content-between">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col sm={12}>
              <button className="specBtn">Holy</button>
            </Col>
            <Col sm={12}>
              <button className="specBtn">Shadow</button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        );
      case "Paladin":
        return (
          <Row class="justify-content-between">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col sm={12} md={2}>
              <button className="specBtn">Protection</button>
            </Col>
            <Col sm={12} md={2}>
              <button className="specBtn">Retribution</button>
            </Col>{" "}
            <Col sm={12} md={2}>
              <button className="specBtn">Holy</button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        );
      case "Druid":
        return (
          <Row class="justify-content-between">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <button className="specBtn">Bear</button>
            </Col>
            <Col sm={12} md={2}>
              <button className="specBtn">Balance</button>
            </Col>{" "}
            <Col sm={12} md={2}>
              <button className="specBtn">Cat</button>
            </Col>
            <Col sm={12} md={2}>
              <button className="specBtn">Restoration</button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        );
      default:
        return "";
    }
  }

  // const navigate = useNavigate();
  function setClassClick(e, pickedClass) {
    console.log(classSelected);
    e.preventDefault();
    console.log(pickedClass);
    setClassSelected(pickedClass);

    // setClassSelected(pickedClass);

    // console.log(classSelected);
    // return pickedClass;
    navigate("/BiS");
  }
  console.log("BIS LIST", classSelected);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{classSelectedURL}</h1>
        <div className="backgroundOverlay ">
          <p style={{ fontSize: "14px" }}>
            <i style={{ color: "lightgrey" }}>Choose a Specialization</i>
          </p>
          <Specs />
          <br />
          <br />

          <Row style={{ margin: "0", padding: "0" }}>
            <Col></Col>
            <Col>
              {" "}
              <div className="mb-1 blank">
                <div className="enchant"></div>
              </div>
              <div className="mb-1 blank"></div>
              <div className="mb-1 blank">
                {" "}
                <div className="mb-1 blank">
                  <div className="enchant"></div>
                </div>
              </div>
              <div className="mb-1 blank">
                {" "}
                <div className="mb-1 blank">
                  <div className="enchant"></div>
                </div>
              </div>
              <div className="mb-1 blank">
                {" "}
                <div className="mb-1 blank">
                  <div className="enchant"></div>
                </div>
              </div>
              <div className="mb-1 blank">
                {" "}
                <div className="mb-1 blank">
                  <div className="enchant"></div>
                </div>
              </div>
            </Col>
            <Col className="justify-content-center text-center colShorten">
              <div className="mb-1 itemSquare">
                <Item itemId={25697} rarity={"Legendary"} />
                <div className="mb-1 blank"></div>
              </div>

              <div className="mb-1 itemSquare"></div>
              <div className="mb-1 itemSquare"></div>
              <div className="mb-1 itemSquare"></div>
              <div className="mb-1 itemSquare"></div>
              <div className="mb-1 itemSquare"></div>
            </Col>
            <Col className="colShorten"></Col>
            <Col className="colShorten"></Col>

            <Col className="text-center colShorten">
              <div className="mb-1 itemSquare"></div>

              <div className="mb-1 itemSquare"></div>
              <div className="mb-1 itemSquare"></div>
              <div className="mb-1 itemSquare"></div>
              <div className="mb-1 itemSquare"></div>
              <div className="mb-1 itemSquare"></div>
            </Col>

            <Col className="text-center">
              <div className="mb-1 blank">
                {" "}
                <div className="enchantRight"></div>
              </div>

              <div className="mb-1 blank"> </div>
              <div className="mb-1 blank">
                {" "}
                <div className="enchantRight"></div>
              </div>
              <div className="mb-1 blank">
                {" "}
                <div className="enchantRight"></div>
              </div>
              <Row>
                <Col>
                  <div className="mb-1 itemSquare rightSquare"> </div>
                </Col>{" "}
                <Col>
                  <div className="mb-1 itemSquare rightSquare"> </div>
                </Col>{" "}
              </Row>
            </Col>
            <Col></Col>
          </Row>

          <Row style={{ margin: 0, padding: 0 }}>
            <div className=" ">
              <div className="d-inline-flex">
                <div className="mx-1  blank">
                  <div className="enchantAbove"></div>
                </div>
                <div className="mx-1 blank">
                  <div className="enchantAbove"></div>
                </div>
                <div className="mx-1  blank">
                  {" "}
                  <div className="enchantAbove"></div>{" "}
                </div>
              </div>
            </div>
          </Row>

          <Row style={{ margin: 0, padding: 0 }}>
            <div className=" ">
              <div className="d-inline-flex">
                <div className="mx-1 itemSquare"></div>
                <div className="mx-1 itemSquare"></div>
                <div className="mx-1 itemSquare"> </div>
              </div>
            </div>
          </Row>
          {/* <div style={{ margin: "45px" }}></div> */}
          {/* <Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <div className="blank">
                <div className="enchant"></div>
              </div>
              <Item slot={"head"} />
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Item slot={"gloves"} />
              <div className="blank">
                <div className="enchant"></div>
              </div>
              <Col></Col>
              <Col></Col>
            </Row>

            <Row>
              <Col></Col>
              <Col></Col>
              <div className="blank"></div>
              <Item slot={"neck"} />
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Item slot={"waist"} />
              <div className="blank"></div>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <div className="blank">
                <div className="enchant"></div>
              </div>
              <Item slot={"shoulders"} />
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Item slot={"legs"} />
              <div className="blank">
                <div className="enchant"></div>
              </div>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <div className="blank">
                <div className="enchant"></div>
              </div>
              <Item slot={"back"} />
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Item slot={"feet"} />
              <div className="blank">
                <div className="enchant"></div>
              </div>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <div className="blank"></div>
              <Item slot={"chest"} />
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Item slot={"ring1"} />
              <Item slot={"ring2"} />
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <div className="blank"></div>
              <Item slot={"wrist"} />
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Item slot={"trinket1"} />
              <Item slot={"trinket2"} />
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <div className="blank"></div>
              <Col>
                {" "}
                <Item slot={"MH"} />
              </Col>
              <Col>
                {" "}
                <Item slot={"OH"} />
              </Col>{" "}
              <Col>
                {" "}
                <Item slot={"ranged"} />
              </Col>
              <div className="blank"></div>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <div className="blank"></div>
              <Col>
                {" "}
                <div className="blank">
                  <div className="enchant"></div>
                </div>
              </Col>
              <Col>
                {" "}
                <div className="blank">
                  <div className="enchant"></div>
                </div>
              </Col>{" "}
              <Col>
                {" "}
                <div className="blank">
                  <div className="enchant"></div>
                </div>
              </Col>
              <div className="blank"></div>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Row> */}

          {/* <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <Item number={"head"} />
              <Item number={"neck"} />
              <Item number={"shoulders"} />
              <Item number={"back"} />
              <Item number={"chest"} />
              <Item number={"wrist"} />
            </Col>

            <Col></Col>
            <Col></Col>

            <Col>
              <Item number={"gloves"} />
              <Item number={"waist"} />
              <Item number={"legs"} />
              <Item number={"ring"} />
              <Item number={"trinket"} />
            </Col>
            <Col>
              <div className="blank"></div>
              <div className="blank"></div>
              <div className="blank"></div>

              <Item number={"ring2"} />
              <Item number={"trinket2"} />
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              {" "}
              <Item number={"MH"} />
            </Col>
            <Col>
              {" "}
              <Item number={"OH"} />
            </Col>{" "}
            <Col>
              {" "}
              <Item number={"ranged"} />
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row> */}
        </div>
      </header>
    </div>
  );
}

export default BiSList;
