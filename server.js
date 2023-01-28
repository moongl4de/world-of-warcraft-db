const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const port = 9000;
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models/index.js");

db.sequelize.sync();

console.log(db);

app.get("/", (req, res) => {
  res.send("Hey there!");
});

// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
// }
app.use(routes);

app.listen(port, function (err) {
  if (err) {
    console.log("error", err);
  }
  console.log(`App is listening on port ${port} at: http://localhost:9000/`);
});
