#!/usr/bin/env node

var fs = require('fs');
var express = require("express");
//var app = express(express.logger());
var app = express.createServer(express.logger());


fs.readFile('index.html', "utf-8", function (err, data) {
  if (err) throw err;

app.get('/', function(request, response) {
  console.log(data);
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
//console.log(data);
  console.log("Listening on " + port);
});



});

