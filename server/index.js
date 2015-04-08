var express = require('express');
var app = express();
var path = require('path');
var config = require('./config/environment');
var chalk = require('chalk');

// Connect to Database
var mongoose = require('mongoose');
var dbConfig = require('./config/db.js');
mongoose.connect(dbConfig.url);

// Configure Express
require('./config/express')(app);

// Delegate to router
var router = require('./routes');
app.use(router);


var port = config.port;
chalk.underline.blue('Server listening on port ' + port);
app.listen(port);