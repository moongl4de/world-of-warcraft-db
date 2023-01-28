const router = require("express").Router();
const landingPage = require("./landingPage");

router.use("/", landingPage);

module.exports = router;
