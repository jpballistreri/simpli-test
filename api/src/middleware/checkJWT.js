const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  //console.log(req.headers.authorization);
  if (req.headers.token) {
    console.log(req.headers.token);
    const token = req.headers.token;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      decoded && next();

      //.then((decoded) => console.log(decoded));
    } catch (error) {
      res.status(403).send("Unauthorized");
    }

    //fs.auth()
    // .verifyIdToken(token)
    // .then((decodedToken) => {
    //   req.headers.decodedToken = decodedToken;
    //   next();
    // })
    // .catch(() => {
    //   res.status(403).send("Unauthorized");
    // });
  } else {
    res.status(403).send("Unauthorized");
  }
};

module.exports = { checkJWT };
