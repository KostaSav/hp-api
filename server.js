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
  res.json(characters);
});

app.get("/api/character/:id", function (req, res) {
  var id = req.params.id.toLowerCase();
  res.json(
      characters.filter((character) => character.id.toLowerCase() === id)
  );
});

app.get("/api/characters/students", function (req, res) {
  res.json(characters.filter((character) => character.hogwartsStudent));
});

app.get("/api/characters/staff", function (req, res) {
  res.json(characters.filter((character) => character.hogwartsStaff));
});

app.get("/api/characters/house/:house", function (req, res) {
  var house = req.params.house.toLowerCase();
  res.json(
    characters.filter((character) => character.house.toLowerCase() === house)
  );
});

app.get("/api/spells", function(req, res){
  res.json(spells);
});

app.use(express.static("public"));

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
