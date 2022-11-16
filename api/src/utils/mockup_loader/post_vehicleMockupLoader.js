const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
const db = require("../../models");
const Post_vehicle = db.post_vehicle;

exports.loadMockup = async () => {
  Post_vehicle.findAll().then((data) => {
    if (data.length != 0) {
      console.log("no se carga mockup");
    } else {
      let stream = fs.createReadStream(
        "./mock_data/post_vehicles_mock_data.csv"
      );
      let csvData = [];
      let csvStream = fastcsv
        .parse()
        .on("data", function (data) {
          csvData.push(data);
        })
        .on("end", function () {
          // remove the first line: header
          csvData.shift();

          const query =
            "INSERT INTO post_vehicles (vehicle_id,post_id) VALUES ($1, $2)";

          try {
            csvData.forEach((row) => {
              console.log("ROWWW");
              console.log(row);
              let newPost_vehicle = {
                vehicleId: row[3],
                postId: row[4],
              };
              Post_vehicle.create(newPost_vehicle)
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          } catch (err) {
            console.log(err);
          }
        });

      stream.pipe(csvStream);
    }
  });
};
