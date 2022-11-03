const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  //console.log(req.headers.token);
  if (req.headers.cookie) {
    const token = req.headers.cookie.split("=")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      decoded && next();
    } catch (error) {
      res.status(403).send("Unauthorized");
    }
  } else {
    res.status(403).send("Unauthorized");
  }
};

module.exports = { checkJWT };
