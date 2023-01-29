const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// router.use("*", (req, res) => {
//   console.log("sup");
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

router.use("/api", apiRoutes);

module.exports = router;
