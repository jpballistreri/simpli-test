const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
const db = require("../../models");
const Vehicle = db.vehicle;

exports.loadMockup = async () => {
  Vehicle.findAll().then((data) => {
    if (data.length != 0) {
      console.log("no se carga mockup");
    } else {
      let stream = fs.createReadStream(
        "./mock_data/vehicles_dealer_1_MockupLoader.csv"
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
            "INSERT INTO vehicles (model,title,description,gear_box,year,type_gear_box,motor,type,doors,dealer_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

          try {
            csvData.forEach((row) => {
              console.log("ROWWW");
              console.log(row);
              let newVehicle = {
                model: row[0],
                title: row[1],
                description: row[2],
                gear_box: row[3],
                year: row[4],
                type_gear_box: row[5],
                motor: row[6],
                type: row[7],
                doors: row[8],
                dealerId: row[9],
              };
              Vehicle.create(newVehicle)
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
