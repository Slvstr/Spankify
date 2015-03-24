var express = require('express');
var router = express.Router();
var config = require('./config/environment');



/******************************************************************************
 * Static Routes
 *****************************************************************************/
router.use(express.static(config.root + '/build/app'));
router.use(express.static(config.root + '/build'));
router.use(express.static(config.root));





// Index Route
router.get('/', function(req, res) {
  res.sendFile(config.root + '/build/index.html');
});




router.use('/auth', require('./auth'));


// Users Route 
router.use('/api/user', require('./api/user/user.js'));


router.get('/fail', function(req, res, next) {
  res.send('second facebook failed')
})


// Unhandled request --> Redirect to index route
router.use(function(req, res) {
  res.redirect('/');
});

module.exports = router;