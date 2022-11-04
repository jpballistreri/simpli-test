const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
const db = require("../../models");
const Accesory = db.accesory;

exports.loadMockup = async () => {
  Accesory.findAll().then((data) => {
    if (data.length != 0) {
      console.log("no se carga mockup");
    } else {
      let stream = fs.createReadStream("./mock_data/accesory_MOCK_DATA.csv");
      let csvData = [];
      let csvStream = fastcsv
        .parse()
        .on("data", function (data) {
          csvData.push(data);
        })
        .on("end", function () {
          // remove the first line: header
          csvData.shift();

          try {
            csvData.forEach((row) => {
              console.log("ROWWW");
              console.log(row);
              let newAccesory = {
                model: row[0],
                title: row[1],
                description: row[2],
                dealerId: row[3],
                vehicleId: row[4],
              };
              Accesory.create(newAccesory)
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
