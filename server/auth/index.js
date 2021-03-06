
'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var User = require('../api/user/user.model');

// Passport Configuration
require('./facebook/passport').setup(User, config);


var router = express.Router();

// TODO (Erik Hellenbrand) : Add Spotify auth for admin side;
router.use('/facebook', require('./facebook'));

module.exports = router;