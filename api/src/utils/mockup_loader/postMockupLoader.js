const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
const db = require("../../models");
const Post = db.post;

exports.loadMockup = async () => {
  Post.findAll().then((data) => {
    if (data.length != 0) {
      console.log("no se carga mockup");
    } else {
      let stream = fs.createReadStream("./mock_data/posts_mock_data.csv");
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
            "INSERT INTO posts (price,advance,stock,dealer_id) VALUES ($1, $2, $3, $4)";

          try {
            csvData.forEach((row) => {
              console.log("ROWWW");
              console.log(row);
              let newPost = {
                price: row[1],
                advance: row[2],
                stock: row[3],
                dealerId: row[6],
              };
              Post.create(newPost)
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
