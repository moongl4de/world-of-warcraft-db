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
import Enchant from "../components/Enchant";
import priestIcon from "../assets/icon-priest.webp";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const params = new URLSearchParams(window.location.pathname);

function BiSList({ setClassSelected, classSelected }) {
  const { classSelectedURL } = useParams();

  const [isSpecSelected, setSpecSelected] = useState(false);
  const [selectedSpec, setSelectedSpec] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("");

  const [apiResults, setApiResults] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    // Update the document title using the browser API
    if (classSelected == "") {
      navigate("/");
    }
  }, []);

  function handleSpecSelect(e, spec) {
    e.preventDefault();
    console.log("..");

    setSelectedSpec(spec);
    console.log(selectedSpec);
  }

  function getGearset(e, phase) {
    if (selectedSpec) {
      e.preventDefault();
      console.log("..");

      let spec = selectedSpec;
      console.log("SPEC AND PHASE", spec, phase);

      //
      console.log("Selected Spec: ", phase);
      //
      console.log("..");

      let searchResults = [];

      // var data = JSON.stringify({
      //   name: value,
      // });
      var config = {
        method: "get",
        url: `http://localhost:9000/api/gearset/${classSelected}/${spec}/${phase}`,
        headers: {
          "Content-Type": "application/json",
        },
        // data: data,
      };

      console.log("API CONFIG: ", config);

      axios(config)
        .then((response) => {
          searchResults = response.data;
          console.log(searchResults);
          setApiResults(searchResults);
          setSpecSelected(true);

          console.log("api res", apiResults);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please select a specialization & phase.");
    }
  }

  function Phases() {
    return (
      <Row style={{ margin: 0, padding: 0 }}>
        <div className=" ">
          <i style={{ fontSize: "14px", color: "lightgrey" }}>
            Select a phase:
          </i>
          <br />
          <div className="d-inline-flex">
            <button onClick={(e) => getGearset(e, 1)} className=" phaseBtn">
              1
            </button>
            <button onClick={(e) => getGearset(e, 2)} className="phaseBtn">
              2
            </button>
            <button onClick={(e) => getGearset(e, 3)} className="phaseBtn">
              3
            </button>
            <button onClick={(e) => getGearset(e, 4)} className="phaseBtn">
              4
            </button>
            <button onClick={(e) => getGearset(e, 5)} className="phaseBtn">
              5
            </button>
            <button onClick={(e) => getGearset(e, 6)} className="phaseBtn">
              6
            </button>
          </div>
        </div>
      </Row>
    );
  }

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
              <button
                onClick={(e) => getGearset(e, "Protection")}
                className="specBtn"
              >
                Protection
              </button>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <button
                onClick={(e) => getGearset(e, "Fury")}
                className="specBtn"
              >
                Fury
              </button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        );
      case "Priest":
        return (
          <Row className="justify-content-between">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col sm={12} md={12}>
              <button
                onClick={(e) => handleSpecSelect(e, "Holy")}
                className="specBtn"
              >
                Holy
              </button>
            </Col>
            <Col sm={12} md={12}>
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
          <Row className="justify-content-between">
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
          <Row className="justify-content-between">
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

  if (isSpecSelected) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="backgroundOverlay ">
            <Row>
              <Col sm={12} md={4}>
                <h1 className="specHeader">
                  {selectedSpec} {classSelectedURL}
                </h1>
              </Col>
              <Col sm={12} md={4}>
                {" "}
                <Specs style={{ textAlign: "left" }} />
              </Col>
              <Col sm={12} md={4}>
                {" "}
                <Phases />
              </Col>
            </Row>

            <br />
            <br />
            <Row style={{ margin: "0", padding: "0" }}>
              <Col></Col>
              <Col>
                {" "}
                <div className="mb-1 blank">
                  <div className="enchant">
                    {" "}
                    <Enchant
                      itemId={apiResults.enchantHead.itemId}
                      rarity={apiResults.enchantHead.quality}
                      iconURL={apiResults.enchantHead.icon}
                    />
                  </div>
                </div>
                <div className="mb-1 blank"></div>
                <div className="mb-1 blank">
                  {" "}
                  <div className="mb-1 blank">
                    <div className="enchant">
                      {" "}
                      <Enchant
                        itemId={apiResults.enchantShoulder.itemId}
                        rarity={apiResults.enchantShoulder.quality}
                        iconURL={apiResults.enchantShoulder.icon}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-1 blank">
                  {" "}
                  <div className="mb-1 blank">
                    <div className="enchant">
                      {" "}
                      <Enchant
                        itemId={apiResults.enchantBack.itemId}
                        rarity={apiResults.enchantBack.quality}
                        iconURL={apiResults.enchantBack.icon}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-1 blank">
                  {" "}
                  <div className="mb-1 blank">
                    <div className="enchant">
                      {" "}
                      <Enchant
                        itemId={apiResults.enchantChest.itemId}
                        rarity={apiResults.enchantChest.quality}
                        iconURL={apiResults.enchantChest.icon}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-1 blank">
                  {" "}
                  <div className="mb-1 blank">
                    <div className="enchant">
                      {" "}
                      <Enchant
                        itemId={apiResults.enchantWrist.itemId}
                        rarity={apiResults.enchantWrist.quality}
                        iconURL={apiResults.enchantWrist.icon}
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="justify-content-center text-center colShorten">
                <div className="mb-1 itemSquare">
                  <Item
                    // icon={apiResults.head.itemId}

                    itemId={apiResults.head.itemId}
                    rarity={apiResults.head.quality}
                    iconURL={apiResults.head.icon}
                  />
                  <div className="mb-1 blank"></div>
                </div>

                <div className="mb-1 itemSquare">
                  <Item
                    itemId={apiResults.neck.itemId}
                    rarity={apiResults.neck.quality}
                    iconURL={apiResults.neck.icon}
                  />
                </div>
                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.shoulder.itemId}
                    rarity={apiResults.shoulder.quality}
                    iconURL={apiResults.shoulder.icon}
                  />
                </div>
                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.back.itemId}
                    rarity={apiResults.back.quality}
                    iconURL={apiResults.back.icon}
                  />
                </div>
                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.chest.itemId}
                    rarity={apiResults.chest.quality}
                    iconURL={apiResults.chest.icon}
                  />
                </div>
                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.wrist.itemId}
                    rarity={apiResults.wrist.quality}
                    iconURL={apiResults.wrist.icon}
                  />
                </div>
              </Col>
              <Col className="colShorten"></Col>
              <Col className="colShorten"></Col>

              <Col className="text-center colShorten">
                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.hands.itemId}
                    rarity={apiResults.hands.quality}
                    iconURL={apiResults.hands.icon}
                  />
                </div>

                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.waist.itemId}
                    rarity={apiResults.waist.quality}
                    iconURL={apiResults.waist.icon}
                  />
                </div>
                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.legs.itemId}
                    rarity={apiResults.legs.quality}
                    iconURL={apiResults.legs.icon}
                  />
                </div>
                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.feet.itemId}
                    rarity={apiResults.feet.quality}
                    iconURL={apiResults.feet.icon}
                  />
                </div>
                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.ring1.itemId}
                    rarity={apiResults.ring1.quality}
                    iconURL={apiResults.ring1.icon}
                  />
                </div>
                <div className="mb-1 itemSquare">
                  {" "}
                  <Item
                    itemId={apiResults.trinket1.itemId}
                    rarity={apiResults.trinket1.quality}
                    iconURL={apiResults.trinket1.icon}
                  />
                </div>
              </Col>

              <Col className="text-center">
                <div className="mb-1 blank">
                  {" "}
                  <div className="enchantRight">
                    {" "}
                    <Enchant
                      itemId={apiResults.enchantHands.itemId}
                      rarity={apiResults.enchantHands.quality}
                      iconURL={apiResults.enchantHands.icon}
                    />
                  </div>
                </div>

                <div className="mb-1 blank"> </div>
                <div className="mb-1 blank">
                  {" "}
                  <div className="enchantRight">
                    {" "}
                    <Enchant
                      itemId={apiResults.enchantLegs.itemId}
                      rarity={apiResults.enchantLegs.quality}
                      iconURL={apiResults.enchantLegs.icon}
                    />
                  </div>
                </div>
                <div className="mb-1 blank">
                  {" "}
                  <div className="enchantRight">
                    {" "}
                    <Enchant
                      itemId={apiResults.enchantFeet.itemId}
                      rarity={apiResults.enchantFeet.quality}
                      iconURL={apiResults.enchantFeet.icon}
                    />
                  </div>
                </div>
                <Row>
                  <Col>
                    <div className="mb-1 itemSquare rightSquare">
                      {" "}
                      <Item
                        itemId={apiResults.ring2.itemId}
                        rarity={apiResults.ring2.quality}
                        iconURL={apiResults.ring2.icon}
                      />{" "}
                    </div>
                  </Col>{" "}
                  <Col>
                    <div className="mb-1 itemSquare rightSquare">
                      {" "}
                      <Item
                        itemId={apiResults.trinket2.itemId}
                        rarity={apiResults.trinket2.quality}
                        iconURL={apiResults.trinket2.icon}
                      />{" "}
                    </div>
                  </Col>{" "}
                </Row>
              </Col>
              <Col></Col>
            </Row>
            <Row style={{ margin: 0, padding: 0 }}>
              <div className=" ">
                <div className="d-inline-flex">
                  <div className="mx-1  blank">
                    <div className="enchantAbove">
                      {" "}
                      <Enchant
                        itemId={apiResults.enchantMainhand.itemId}
                        rarity={apiResults.enchantMainhand.quality}
                        iconURL={apiResults.enchantMainhand.icon}
                      />
                    </div>
                  </div>
                  <div className="mx-1 blank">
                    <div className="enchantAbove">
                      {" "}
                      <Enchant
                        itemId={apiResults.enchantOffhand.itemId}
                        rarity={apiResults.enchantOffhand.quality}
                        iconURL={apiResults.enchantOffhand.icon}
                      />
                    </div>
                  </div>
                  <div className="mx-1  blank">
                    {" "}
                    <div className="enchantAbove">
                      {" "}
                      <Enchant
                        itemId={apiResults.enchantRanged.itemId}
                        rarity={apiResults.enchantRanged.quality}
                        iconURL={apiResults.enchantRanged.icon}
                      />
                    </div>{" "}
                  </div>
                </div>
              </div>
            </Row>
            <Row style={{ margin: 0, padding: 0 }}>
              <div className=" ">
                <div className="d-inline-flex">
                  <div className="mx-1 itemSquare">
                    {" "}
                    <Item
                      itemId={apiResults.mainhand.itemId}
                      rarity={apiResults.mainhand.quality}
                      iconURL={apiResults.mainhand.icon}
                    />
                  </div>
                  <div className="mx-1 itemSquare">
                    {" "}
                    <Item
                      itemId={apiResults.offhand.itemId}
                      rarity={apiResults.offhand.quality}
                      iconURL={apiResults.offhand.icon}
                    />
                  </div>
                  <div className="mx-1 itemSquare">
                    {" "}
                    <Item
                      itemId={apiResults.ranged.itemId}
                      rarity={apiResults.ranged.quality}
                      iconURL={apiResults.ranged.icon}
                    />
                  </div>
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
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <div className="backgroundOverlay ">
            {" "}
            <h1>{classSelectedURL}</h1>
            <p style={{ fontSize: "14px" }}>
              <i style={{ color: "lightgrey" }}>Choose a Specialization</i>
            </p>
            <Specs setSpecSelected={setSpecSelected} />
            <Phases />
            <br />
            <br />
          </div>
        </header>
      </div>
    );
  }
}

export default BiSList;
