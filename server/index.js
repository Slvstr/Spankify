var express = require('express');
var app = express();
var path = require('path');
var chalk = require('chalk');


// Configure Express
require('./config/express')(app);


// Set root directory app variable
app.set('rootDir', path.normalize(__dirname + '/..'));
var rootDir = app.get('rootDir');



app.get('/', function(req, res) {
  res.sendFile(rootDir + '/build/index.html');
});


// Unhandled request --> Redirect to index route
app.use(function(req, res) {
  res.redirect('/');
});


var port = process.env.port || 9000;
chalk.underline.blue('Server listening on port ' + port);
app.listen(port);