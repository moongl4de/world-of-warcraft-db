module.exports = (app) => {
  const items = require("../../controllers/item.controller.js");

  let router = require("express").Router();

  router.post("/", items.create);

  router.get("/", items.findAll);

  app.use("/api/items", router);
};
