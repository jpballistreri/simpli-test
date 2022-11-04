module.exports = (app) => {
  const post = require("../controllers/post.controller");

  var router = require("express").Router();
  console.log("router ac c");

  router.get("/api/dealer/:dealer_id/posts/?:post_id?", post.findOne);
  router.post("/api/dealer/:dealer_id/posts/", post.create);
  //router.put("/api/dealer/:dealer_id/accesories/:accesory_id", post.update);
  //router.delete("/api/dealer/:dealer_id/vehicles/:vehicle_id", post.delete);

  app.use(router);
};
