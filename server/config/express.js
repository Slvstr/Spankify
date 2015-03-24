var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var cors = require('cors');
var passport = require('passport');
// var jwt = require('jsonwebtoken');

var config = require('./environment');


module.exports = function(app) {

  /******************************************************************************
   * Auth Config
   *****************************************************************************/
   app.use(cookieParser());

   // Start up passport
   app.use(passport.initialize());

   // Add CORS headers
   app.use(cors());



   /******************************************************************************
    * Parse JSON POST requests
    *****************************************************************************/
    app.use(bodyParser.urlencoded({extended: false}));


    /******************************************************************************
     * Request Logger
     *****************************************************************************/
    app.use(morgan('combined'));


    
};

