var express = require('express');
var app = express();

var characters = require('./data/characters.json')

app.get('/', function(req, res) { res.sendfile('public/index.html'); });

app.get('/api/characters', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(characters);
})

app.get('/api/characters/students', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(characters.filter(character => character.hogwartsStudent));
})

app.get('/api/characters/staff', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(characters.filter(character => character.hogwartsStaff));
})

app.get('/api/characters/house/:house', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var house = req.params.house.toLowerCase();
  res.json(
      characters.filter(character => character.house.toLowerCase() === house));
})

app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
