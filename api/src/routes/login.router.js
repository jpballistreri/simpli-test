module.exports = (app) => {
  const login = require("../controllers/login.controller");

  var router = require("express").Router();

  ///Obtener token
  router.post("/", login.login);

  app.use("/api/login", router);
};
