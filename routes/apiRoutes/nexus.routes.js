module.exports = (app) => {
  const nexus = require("../../controllers/nexus.controller.js");

  let router = require("express").Router();

  router.post("/", nexus.create);

  router.get("/", nexus.findAll);

  router.get("/:id", nexus.findOne);

  router.put("/:id", nexus.update);

  router.delete("/:id", nexus.delete);

  app.use("/api/nexus", router);
};
