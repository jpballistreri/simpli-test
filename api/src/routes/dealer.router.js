module.exports = (app) => {
  const dealer = require("../controllers/dealer.controller");

  var router = require("express").Router();

  router.get("/:id", dealer.findOne);
  router.post("/", dealer.create);
  router.put("/:id", dealer.update);

  app.use("/api/dealer", router);
};
