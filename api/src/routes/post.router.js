module.exports = (app) => {
  const post = require("../controllers/post.controller");

  var router = require("express").Router();

  router.get("/api/dealer/:dealer_id/posts/?:post_id?", post.findOne);
  router.post("/api/dealer/:dealer_id/posts/", post.create);
  router.put("/api/dealer/:dealer_id/posts/:post_id", post.update);
  //router.delete("/api/dealer/:dealer_id/vehicles/:vehicle_id", post.delete);

  app.use(router);
};
