const express = require("express");
const cors = require("cors");
var path = require("path");
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

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Hola" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
