var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');


var rootDir = app.get('rootDir');


app.use(express.static(rootDir + '/build/app'));
app.use(express.static(rootDir + '/build'));
app.use(express.static(rootDir));