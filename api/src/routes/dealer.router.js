module.exports = (app) => {
  const dealer = require("../controllers/dealer.controller");

  var router = require("express").Router();

  router.get("/:id", dealer.findOne);
  router.post("/", dealer.create);

  app.use("/api/dealer", router);
};
