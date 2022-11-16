const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  if (req.headers.cookie) {
    try {
      const cookies = req.headers.cookie.split(" ");
      let token = cookies.find((cookie) => cookie.substring(0, 4) == "jwt=");
      token = token.split("=")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      decoded && next();
    } catch (error) {
      res.status(403).send({ message: "Unauthorized" });
    }
  } else {
    res.status(403).send({ message: "Unauthorized" });
  }
};

module.exports = { checkJWT };
