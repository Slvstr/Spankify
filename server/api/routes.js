var express = require('express');
var router = express.Router();
var path = require('path');


// Set root directory app variable
var rootDir = path.normalize(__dirname + '/../..');


// Index Route
router.get('/', function(req, res) {
  res.sendFile(rootDir + '/build/index.html');
});


// Users Route 
router.use('/user', require('./user'));


// Unhandled request --> Redirect to index route
router.use(function(req, res) {
  res.redirect('/');
});

module.exports = router;