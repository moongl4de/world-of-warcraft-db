module.exports = (app) => {
  const gearset = require("../../controllers/gearset.controller");
  //   console.log(gearsets);

  let router = require("express").Router();

  router.post("/", gearset.create);

  router.get("/", gearset.findAll);

  router.get("/:id", gearset.findOne);

  router.put("/:id", gearset.update);

  router.delete("/:id", gearset.delete);

  app.use("/api/gearset", router);
};
