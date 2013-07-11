#!/usr/bin/env node
var fs = require('fs');
var infile = "index.html";
var buffer = Buffer(50);
buffer = fs.readFileSync(infile);
