const db = require("../models");
const Dealer = db.dealer;
//const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
  console.log("CREATE?");
  const { name, street_name, street_number, location, email, tel } = req.body;
  console.log(req.body);

  const newDealer = {
    name,
    street_name,
    street_number,
    location,
    email,
    tel,
  };
  Dealer.create(newDealer)
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

exports.update = (req, res) => {
  const dealerId = req.params.id;
  Dealer.update(req.body, { where: { id: dealerId } }).then((num) => {
    console.log(num);
    num[0] === 1
      ? res.send({ message: `Dealer id:${dealerId} updated` })
      : res.send({ message: "Dealer not found" });
  });
};

exports.findOne = (req, res) => {
  const dealerId = req.params.id;

  Dealer.findByPk(dealerId)
    .then((data) => {
      if (data === null) {
        res.status(404).send({ message: "Dealer not exist" });
      } else {
        res.status(200).send({ dealer: data });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "db error" });
    });
};
