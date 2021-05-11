var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var CHARACTERS_JSON = path.join(__dirname, 'data/characters.json');

app.get('/', function(req,res) {
  res.sendfile('public/index.html');
});

app.get('/api/characters', function(req, res){
  fs.readFile(CHARACTERS_JSON, function(err, data){
    if(err) process.exit(1);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(JSON.parse(data));
  })
})

app.get('/api/characters/creators', function(req, res){
  fs.readFile(CHARACTERS_JSON, function(err, data){
    if(err) process.exit(1);
    json = JSON.parse(data);
    creators_array = [];
    for(character of json){
      if(character.creator == true){
      creators_array.push(character);
      }
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(creators_array);
  })
})

app.get('/api/characters/companies-organizations', function(req, res){
  fs.readFile(CHARACTERS_JSON, function(err, data){
    if(err) process.exit(1);
    json = JSON.parse(data);
    companies-organizations_array = [];
    for(character of json){
      if(character.companyOrganization == true){
      companies-organization_array.push(character);
      }
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(companies-organizations_array);
  })
})

app.get('/api/characters/users', function(req, res){
  fs.readFile(CHARACTERS_JSON, function(err, data){
    if(err) process.exit(1);
    json = JSON.parse(data);
    users_array = [];
    for(character of json){
      if(character.user == true){
      users_array.push(character);
      }
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(users_array);
  })
})

app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
