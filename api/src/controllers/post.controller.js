const db = require("../models");
const Dealer = db.dealer;
const Vehicle = db.vehicle;
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
  const { price, vehicle_id } = req.body;
  const { dealer_id, post_id } = req.params;

  const newPost = { price, dealerId: dealer_id };

  Post.update(newPost, { where: { id: post_id } })
    .then((num) => {
      if (num[0] === 1) {
        Post_vehicle.update(
          {
            vehicleId: vehicle_id,
          },
          { where: { postId: post_id } }
        )
          .then((data) => {
            console.log("datalen: " + data.length);
            data.length === 1
              ? res.send({ message: `Post id:${post_id} updated` })
              : res.status(400).send({ message: "server errorrrr" });
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
      } else {
        res.status(404).send({ message: "Post not found" });
      }
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

exports.findOne = (req, res) => {
  const dealer_id = req.params.dealer_id;
  const post_id = req.params.post_id;

  post_id
    ? Post.findOne({
        where: { id: post_id, dealerId: dealer_id },
        include: [
          { model: Dealer },
          { model: Post_vehicle, include: [{ model: Vehicle }] },
        ],
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
        //include: [{ model: Dealer }],
        include: [{ model: Post_vehicle, include: [{ model: Vehicle }] }],
      }).then((data) => {
        console.log(data);
        data.length === 0
          ? res.status(404).send({ message: `Posts not found ` })
          : res.status(200).send(data);
      });
};

exports.delete = (req, res) => {
  const { post_id, dealer_id } = req.params;

  Post_vehicle.destroy({ where: { postId: post_id } })
    .then((num) => {
      if (num === 1) {
        Post.destroy({ where: { id: post_id, dealerId: dealer_id } }).then(
          (num) => {
            num === 1 && res.send({ message: `Post id: ${post_id} deleted` });
            num === 0 && res.send({ message: "Post not found" });
          }
        );
      } else res.status(404).send({ message: "Post not found" });
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
