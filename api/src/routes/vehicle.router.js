module.exports = (app) => {
  const vehicle = require("../controllers/vehicle.controller");

  var router = require("express").Router();

  router.get("/:id", vehicle.findOne);
  router.post("/", vehicle.create);
  router.put("/:id", vehicle.update);
  router.delete("/:id", vehicle.delete);

  app.use("/api/dealer/:id/vehicles/:id", router);
};
