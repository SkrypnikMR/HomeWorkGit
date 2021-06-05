const express = require("express");
const mySQL = require("mysql");
const dbConfig = require("./dbConfig");
const PORT = 5051;
const app = express();
const {
  residentsCount,
  averageAge,
  noRepeatListOfLastnames,
  listOfstreetsLengthSix,
  letterBInCenter,
  listWithRepeatedCount,
  withoutHomeBoys,
  underAgedFromTrue,
  alphabetStreetsWithResidentsCount,
  listOfstreetsResidentLessThree,
} = require("./mySQLRequests");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

app.get("/databases/mySQL", (req, res) => {
  watch(req.query.option).then((data) => {
    res.send(JSON.stringify(data));
  });
});

app.listen(PORT, () => {
  console.log("app listen PORT:", PORT);
});

function watch(option) {
  return new Promise((resolve, reject) => {
    const connection = mySQL.createConnection(dbConfig);
    switch (option) {
      case "1":
        connection.query(residentsCount, function (err, result) {
          if (err) throw err;
          resolve(result);
        });
        connection.end();
        break;
      case "2":
        connection.query(averageAge, function (err, result) {
          if (err) throw err;
          resolve(result);
        });
        connection.end();
        break;
      case "3":
        connection.query(noRepeatListOfLastnames, function (err, result) {
          if (err) throw err;
          resolve(result);
        });
        connection.end();
        break;
      case "4":
        connection.query(listWithRepeatedCount , function (err, result) {
          if (err) throw err;
          resolve(result);
        });
        connection.end();
        break;
      case "5":
        connection.query(letterBInCenter, function (err, result) {
          if (err) throw err;
          resolve(result);
        });
        connection.end();
        break;
      case "6":
        connection.query(withoutHomeBoys, function (err, result) {
          if (err) throw err;
          resolve(result);
        });
        connection.end();
        break;
      case "7":
        connection.query(underAgedFromTrue , function (err, result) {
          if (err) throw err;
          resolve(result);
        });
        connection.end();
        break;
      case "8":
        connection.query(alphabetStreetsWithResidentsCount, function (err, result) {
          if (err) throw err;
          resolve(result);
        });
        connection.end();
        break;
      case "9":
        connection.query(listOfstreetsLengthSix
          ,
          function (err, result) {
            if (err) throw err;
            resolve(result);
          }
        );
        connection.end();
        break;
      case "10":
        connection.query(
          listOfstreetsResidentLessThree,
          function (err, result) {
            if (err) throw err;
            resolve(result);
          }
        );
        connection.end();
        break;
    }
  });
}
