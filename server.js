const { query } = require("express");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(5000, () => console.log("Server running on port 5000"));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ipa",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/articles/:type", (req, res) => {
  console.log(req.params.type);
  const queryString = `select * from article where id ${
    req.params.type === "latest-edition" ? "<= 4" : ">= 5"
  };`;

  connection.query(queryString, (err, articles) => {
    if (err) {
      res.status(400);
    } else {
      setTimeout(
        () => {
          res.json(articles);
        },
        req.params.type == "latest-edition" ? 1500 : 2250
      );
    }
  });
});
