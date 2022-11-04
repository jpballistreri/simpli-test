const db = require("../models");
const Dealer = db.dealer;
const Post = db.post;
const Post_vehicle = db.post_vehicle;
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
  const { price, vehicle_id } = req.body;
  const dealer_id = req.params.dealer_id;

  const newPost = {
    price,
    dealerId: dealer_id,
  };

  Post.create(newPost)
    .then((data) => {
      console.log("cata " + data);
      Post_vehicle.create({
        postId: data.id,
        vehicleId: vehicle_id,
      });
      return data;
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      try {
        const errors = err.errors.map((error) => {
          return error.message;
        });
        res.status(400).send({
          message: errors,
        });
      } catch (error) {
        console.log(error);
        res.status(400).send({ message: "server error" });
      }
    });
};

exports.update = (req, res) => {
  console.log(req.params);
  const dealer_id = req.params.id_dealer;
  const vehicle_id = req.params.id_vehicle;
  req.body.dealer_id = dealer_id;
  console.log(req.body);
  Post.update(req.body, { where: { id: vehicle_id } })
    .then((num) => {
      console.log(num);
      num[0] === 1
        ? res.send({ message: `Post id:${dealer_id} updated` })
        : res.status(404).send({ message: "Post not found" });
    })
    .catch((err) => {
      console.log(err);
      try {
        const errors = err.errors.map((error) => {
          console.log("EEROS?");
          return error.message;
        });
        res.status(400).send({
          message: errors,
        });
      } catch (error) {
        console.log(error);
        res.status(400).send({ message: "server error" });
      }
    });
};

exports.findOne = (req, res) => {
  const dealer_id = req.params.id_dealer;
  const vehicle_id = req.params.id_vehicle;

  vehicle_id
    ? Post.findOne({
        where: { id: vehicle_id, dealer_id: dealer_id },
        include: [{ model: Dealer }],
      })
        .then((data) => {
          data === null
            ? res.status(404).send({ message: "Post not found" })
            : res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send({ message: "db error" });
        })
    : Post.findAll({
        where: { dealer_id: dealer_id },
        include: [{ model: Dealer }],
      }).then((data) => {
        console.log(data);
        data.length === 0
          ? res.status(404).send({ message: `Vehicles not found ` })
          : res.status(200).send(data);
      });
};

exports.delete = (req, res) => {
  const vehicle_id = req.params.id_vehicle;

  Post.destroy({ where: { id: vehicle_id } })
    .then((num) => {
      num === 1
        ? res.send({ message: `Post id: ${vehicle_id} deleted` })
        : res.status(404).send({ message: "Post not found" });
    })
    .catch((err) => {
      res.status(500).send({ message: "db error" });
    });
};
