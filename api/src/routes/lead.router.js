module.exports = (app) => {
  const lead = require("../controllers/lead.controller");

  var router = require("express").Router();

  router.get("/api/dealer/:dealer_id/leads/?:lead_id?", lead.findAll);
  router.post("/api/dealer/:dealer_id/leads/", lead.create);

  app.use(router);
};
