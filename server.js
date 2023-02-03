const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const nexus = require("./nexusAPI/index.js");
const db = require("./models/index.js");
const classicAPI = require("./nexusAPI/index.js");
const port = 9000;
const app = express();
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// db.sequelize.sync();
///this will drop db if exists
// db.sequelize.sync({ force: true });

// app.get("/", (req, res) => {
//   res.send("Hey there!");
// });

// if (process.env.NODE_ENV === "production") {
// app.use(express.static("client/build"));
// }
app.use(routes);
// app.use(nexus);
require("./routes/apiRoutes/item.routes")(app);
require("./routes/apiRoutes/gearset.routes")(app);

const Database = require("wow-classic-items");
const items = new Database.Items();
const professions = new Database.Professions();
const zones = new Database.Zones();
const classes = new Database.Classes();

app.post("/nexus/", (req, res) => {
  console.log(req.body.name);

  let itemId = req.body.itemId;
  let resArr = [];

  res.send(
    (result = items.filter((word) => {
      return word.name.toLowerCase().includes(req.body.name.toLowerCase());
    }))
  );
});

// router.get("/", (req, res) => {
//   console.log("sup");
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.use(express.static(path.join(__dirname, "client/build")));

app.listen(port, function (err) {
  if (err) {
    console.log("error", err);
  }
  console.log(`App is listening on port ${port} at: http://localhost:9000/`);
});
