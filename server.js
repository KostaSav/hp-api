var express = require("express");
var app = express();
var characters = require("./data/characters.json");
var spells = require("./data/spells.json");

app.use("/api", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", function (req, res) {
  res.sendfile("public/index.html");
});

app.get("/api/characters", function (req, res) {
  res.json("Please use the new route (https://hp-api.onrender.com/api/characters), as described here(https://hp-api.onrender.com/)");
});

app.get("/api/characters/students", function (req, res) {
  res.json("Please use the new route (https://hp-api.onrender.com/api/characters/students), as described here(https://hp-api.onrender.com/)");
});

app.get("/api/characters/staff", function (req, res) {
  res.json("Please use the new route (https://hp-api.onrender.com/api/characters/staff), as described here(https://hp-api.onrender.com/)");
});

app.get("/api/characters/house/:house", function (req, res) {
  res.json("Please use the new route (https://hp-api.onrender.com/api/charactershouse/:house), as described here(https://hp-api.onrender.com/)")
});

app.get("/api/spells", function(req, res){
  res.json("Please use the new route (https://hp-api.onrender.com/api/spells), as described here(https://hp-api.onrender.com/)");
});

app.use(express.static("public"));

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
