const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
const db = require("../../models");
const Dealer = db.dealer;

exports.loadMockup = async () => {
  Dealer.findAll().then((data) => {
    if (data.length != 0) {
      console.log("no se carga mockup");
    } else {
      let stream = fs.createReadStream("./mock_data/dealer_MOCK_DATA.csv");
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
            "INSERT INTO dealers (name, street_name, street_number, email, location, tel) VALUES ($1, $2, $3, $4, $5, $6)";

          try {
            csvData.forEach((row) => {
              console.log("ROWWW");
              console.log(row);
              let newDealer = {
                name: row[0],
                street_name: row[1],
                street_number: row[2],
                email: row[3],
                location: row[4],
                tel: row[5],
              };
              Dealer.create(newDealer)
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
