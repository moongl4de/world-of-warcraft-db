const Database = require("wow-classic-items");
const router = require("express").Router();

const items = new Database.Items();
const professions = new Database.Professions();
const zones = new Database.Zones();
const classes = new Database.Classes();

// console.log(result);

// router.use("/api/nexus", apiRoutes);

// app.post("/api/nexus", (req, res) => {
//   console.log(req.body);
// });

// const result = items.filter((word) => {
//   return word.name == "Benediction";
// });
