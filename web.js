#!/usr/bin/env node
var express = require('express');
var fs = require('fs');
var infile = "index.html";
var buffer = Buffer(50);
buffer = fs.readFileSync(infile);
var outfile = buffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(outfile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
