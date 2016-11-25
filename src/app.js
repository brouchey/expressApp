'use strict';
var express = require('express');
var app = express();

app.set('view engine', 'pug');	// set the view engine Pug
app.set('views', __dirname + '/views');	// define views location

app.get('/', function(req, res) {
	res.render('index');	// .pug not required because engine is set
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
