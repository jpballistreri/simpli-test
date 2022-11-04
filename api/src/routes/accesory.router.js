module.exports = (app) => {
  const accesory = require("../controllers/accesory.controller");

  var router = require("express").Router();
  console.log("router ac c");

  router.get(
    "/api/dealer/:dealer_id/accesories/?:accesory_id?",
    accesory.findOne
  );
  router.post("/api/dealer/:dealer_id/accesories/", accesory.create);
  router.put("/api/dealer/:dealer_id/accesories/:accesory_id", accesory.update);
  router.delete("/api/dealer/:dealer_id/vehicles/:vehicle_id", accesory.delete);

  app.use(router);
};
