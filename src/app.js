'use strict';
var express = require('express');

var app = express();

app.get('/', function(req,res) {
	res.send("I love Express !");
});

app.listen(3000, function() {     // listen method can take a callback function, useful to display information in console
	console.log("Server is running (port 3000).");
});
