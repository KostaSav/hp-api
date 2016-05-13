var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var CHARACTERS_JSON = path.join(__dirname, 'data/characters.json');


app.get('/api/characters', function(req, res){
  fs.readFile(CHARACTERS_JSON, function(err, data){
    if(err) process.exit(1);

    res.json(JSON.parse(data));
  })
})

app.get('/api/characters/students', function(req, res){
  fs.readFile(CHARACTERS_JSON, function(err, data){
    if(err) process.exit(1);
    json = JSON.parse(data);
    students_array = [];
    for(character of json){
      if(character.hogwartsStudent == true){
      students_array.push(character);
      }
    }
    res.json(students_array);
  })
})

app.get('/api/characters/house/:house', function(req, res){
  fs.readFile(CHARACTERS_JSON, function(err, data){
    if(err) process.exit(1);
    json = JSON.parse(data);
    house_array = [];
    for(character of json){
      if(character.house.toLowerCase() == req.params.house.toLowerCase()){
      house_array.push(character);
      }
    }
    res.json(house_array);
  })
})

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
