var express = require("express");
var cors = require("cors");
var path = require("path");
var app = express();

app.use(cors());

// เสิร์ฟไฟล์ index.html เมื่อเข้าถึงเส้นทาง '/'
app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function () {
  console.log("Start Server at http://localhost:3000");
});
