'use strict';
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send("<h4>Home</h4>");
});

app.get('/contact', function(req, res) {
	res.send("<h4>Contact</h4>");
});

app.get('/about', function(req, res) {
	res.send("<h4>About</h4>");
});

app.listen(3000, function() {
	console.log("Server is running (port 3000).");
});
