var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", function (req, res, next) {
  res.json("Hello world");
});

app.listen(3000, function () {
  console.log("Start Server");
});
