'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.utilities');

var router = express.Router();


// TODO (Erik Hellenbrand) : possibly change scope, session, setTokenCookie

router
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    failureRedirect: '/login',
    session: false
  }))

  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/fail',
    session: false
  }), auth.setTokenCookie);



module.exports = router;