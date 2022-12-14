//const db = require("../models");
//const Usuario = db.usuarios;
//const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");

//Login Obteneer JWT
exports.login = (req, res) => {
  const { userId, userName } = req.body;
  if (userId && userName) {
    let token = jwt.sign(
      { id: userId, userName: userName },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("jwt", token, {
      maxAge: 86400000,
      httpOnly: true,
    });
    return res.status(201).send({ message: "Auth OK!" });
  } else {
    return res.status(401).send({ message: "userId & userName is required" });
  }
};
