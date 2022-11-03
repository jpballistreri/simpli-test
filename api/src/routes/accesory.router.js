module.exports = (app) => {
  const accesory = require("../controllers/accesory.controller");

  var router = require("express").Router();
  console.log("router ac c");

  //router.get("/api/dealer/:id_dealer/vehicles/?:id_vehicle?", accesory.findOne);
  router.post("/api/dealer/:dealer_id/accesories/", accesory.create);
  //router.put("/api/dealer/:id_dealer/vehicles/:id_vehicle", accesory.update);
  //router.delete("/api/dealer/:id_dealer/vehicles/:id_vehicle", accesory.delete);

  app.use(router);
};
