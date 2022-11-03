const db = require("../models");
const Accesory = db.accesory;
const Dealer = db.dealer;
//const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
  console.log("desde create...");
  const { model, title, description, vehicle_id } = req.body;

  const dealer_id = req.params.dealer_id;

  const newAccesory = {
    model,
    title,
    description,
    dealer_id,
    vehicle_id,
  };

  Accesory.create(newAccesory)
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
//
//exports.update = (req, res) => {
//  //hacer update con el id de vehiculo
//  console.log(req.params);
//  const dealer_id = req.params.id_dealer;
//  const vehicle_id = req.params.id_vehicle;
//  req.body.dealer_id = dealer_id;
//  console.log(req.body);
//  Accesory.update(req.body, { where: { id: vehicle_id } })
//    .then((num) => {
//      console.log(num);
//      num[0] === 1
//        ? res.send({ message: `Accesory id:${dealer_id} updated` })
//        : res.status(404).send({ message: "Accesory not found" });
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
//  const dealer_id = req.params.id_dealer;
//  const vehicle_id = req.params.id_vehicle;
//
//  vehicle_id
//    ? Accesory.findOne({
//        where: { id: vehicle_id, dealer_id: dealer_id },
//        include: [{ model: Dealer }],
//      })
//        .then((data) => {
//          data === null
//            ? res.status(404).send({ message: "Accesory not found" })
//            : res.status(200).send(data);
//        })
//        .catch((err) => {
//          res.status(500).send({ message: "db error" });
//        })
//    : Accesory.findAll({
//        where: { dealer_id: dealer_id },
//        include: [{ model: Dealer }],
//      }).then((data) => {
//        console.log(data);
//        data.length === 0
//          ? res.status(404).send({ message: `Vehicles not found ` })
//          : res.status(200).send(data);
//      });
//};
//
//exports.delete = (req, res) => {
//  const vehicle_id = req.params.id_vehicle;
//
//  Accesory.destroy({ where: { id: vehicle_id } })
//    .then((num) => {
//      num === 1
//        ? res.send({ message: `Accesory id: ${vehicle_id} deleted` })
//        : res.status(404).send({ message: "Accesory not found" });
//    })
//    .catch((err) => {
//      res.status(500).send({ message: "db error" });
//    });
//};
//
