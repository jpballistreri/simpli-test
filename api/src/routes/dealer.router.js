module.exports = (app) => {
  const dealer = require("../controllers/dealer.controller");

  var router = require("express").Router();

  router.get("/api/dealer/?:id?", dealer.findOne);
  router.post("/api/dealer/", dealer.create);
  router.put("/api/dealer/:id", dealer.update);
  router.delete("/api/dealer/:id", dealer.delete);

  app.use(router);
};
