var express = require('express');
var app = express();
var path = require('path');
var chalk = require('chalk');

var rootDir = path.normalize(__dirname + '/..');


app.use(express.static(rootDir));
app.use(express.static(rootDir + '/build/app'));
// app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
  res.sendFile(rootDir + '/build/index.html');
});

app.use(function(req, res) {
  res.redirect('/');
});


var port = process.env.port || 9000;
chalk.underline.blue('Server listening on port ' + port);
app.listen(port);