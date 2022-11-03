module.exports = (app) => {
  const vehicle = require("../controllers/vehicle.controller");

  var router = require("express").Router();

  //router.get("/:id?", vehicle.findOne);
  router.post("/api/dealer/:id_dealer/vehicles/", vehicle.create);
  router.put("/api/dealer/:id_dealer/vehicles/:id_vehicle", vehicle.update);
  //router.delete("/:id", vehicle.delete);

  app.use(router);
};
