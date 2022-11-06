const db = require("../models");
const Lead = db.lead;
const Dealer = db.dealer;
const Post = db.post;
const Post_vehicle = db.post_vehicle;
const Vehicle = db.vehicle;
const Accesory = db.accesory;
//const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
  console.log("creando..");
  const { first_name, last_name, email, tel, query, post_id } = req.body;
  const dealer_id = req.params.dealer_id;
  console.log(dealer_id);

  const newLead = {
    first_name,
    last_name,
    email,
    tel,
    query,
    dealerId: dealer_id,
    postId: post_id,
  };

  console.log(newLead);

  Lead.create(newLead)
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

exports.findAll = (req, res) => {
  const dealer_id = req.params.dealer_id;
  const lead_id = req.params.lead_id;
  //sconsole.log("averrrr " + vehicle_id);

  lead_id
    ? Lead.findOne({
        where: { id: lead_id, dealer_id: dealer_id },
        include: [
          { model: Dealer },
          {
            model: Post,
            include: [
              {
                model: Post_vehicle,
                include: [{ model: Vehicle, include: [{ model: Accesory }] }],
              },
            ],
          },
        ],
      })
        .then((data) => {
          data === null
            ? res.status(404).send({ message: "Lead not found" })
            : res.status(200).send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ message: "db error" });
        })
    : Lead.findAll({
        where: { dealer_id: dealer_id },
        include: [{ model: Post }],
      }).then((data) => {
        console.log(data);
        data.length === 0
          ? res.status(404).send({ message: `Leads not found ` })
          : res.status(200).send(data);
      });
};
