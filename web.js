var fs = require('fs');
var express = require('express');
var app = express(express.logger());


fs.readFile('index.html', "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World from Roger!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
