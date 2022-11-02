const express = require("express");
const cors = require("cors");
var path = require("path");
const { checkJWT } = require("./middleware/checkJWT");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const db = require("./models");
const PORT = process.env.API_PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/api/dealer", checkJWT);

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/api/", (req, res) => {
  res.json({ message: "Hola" });
});

//api/login getJWT
require("./routes/login.router")(app);

//api/dealer({id})
require("./routes/dealer.router")(app);

///api/dealer/:id/vehicles/
require("./routes/vehicle.router")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
