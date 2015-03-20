var express = require('express');
var app = express();
var path = require('path');
var chalk = require('chalk');


// Configure Express
require('./config/express')(app);

// Delegate to router
var router = require('./api/index');
app.use(router);


var port = process.env.port || 9000;
chalk.underline.blue('Server listening on port ' + port);
app.listen(port);