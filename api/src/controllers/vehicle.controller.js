const db = require("../models");
const Vehicle = db.vehicle;
//const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
  const { model, title, description, gear_box, dealer_id } = req.body;

  const newVehicle = {
    model,
    title,
    description,
    gear_box,
    dealer_id,
  };
  Vehicle.create(newVehicle)
    .then((data) => {
      res.send(data);
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

//exports.update = (req, res) => {
//  const dealerId = req.params.id;
//  Vehicle.update(req.body, { where: { id: dealerId } })
//    .then((num) => {
//      console.log(num);
//      num[0] === 1
//        ? res.send({ message: `Vehicle id:${dealerId} updated` })
//        : res.status(404).send({ message: "Vehicle not found" });
//    })
//    .catch((err) => {
//      console.log(err);
//      try {
//        const errors = err.errors.map((error) => {
//          console.log("EEROS?");
//          return error.message;
//        });
//        res.status(400).send({
//          message: errors,
//        });
//      } catch (error) {
//        console.log(error);
//        res.status(400).send({ message: "server error" });
//      }
//    });
//};
//
//exports.findOne = (req, res) => {
//  const dealerId = req.params.id;
//
//  if (dealerId) {
//    Vehicle.findByPk(dealerId)
//      .then((data) => {
//        if (data === null) {
//          res.status(404).send({ message: "Vehicle not found" });
//        } else {
//          res.status(200).send(data);
//        }
//      })
//      .catch((err) => {
//        res.status(500).send({ message: "db error" });
//      });
//  } else {
//    Vehicle.findAll().then((data) => {
//      res.status(200).send(data);
//    });
//  }
//};
//
//exports.delete = (req, res) => {
//  const dealerId = req.params.id;
//  Vehicle.destroy({ where: { id: dealerId } }).then((num) => {
//    num === 1
//      ? res.send({ message: `Vehicle id: ${dealerId} deleted` })
//      : res.status(404).send({ message: "Vehicle not found" });
//  });
//};
//
