var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var EXPRESS_SECRET = 'express session secret';


module.exports = function(app) {

  /******************************************************************************
   * Static Routes
   *****************************************************************************/
  app.set('rootDir', path.normalize(__dirname + '/../..'));
  var rootDir = app.get('rootDir');
  app.use(express.static(rootDir + '/build/app'));
  app.use(express.static(rootDir + '/build'));
  app.use(express.static(rootDir));



  /******************************************************************************
   * Auth Config
   *****************************************************************************/
   app.use(cookieParser());
   app.use(session({secret: EXPRESS_SECRET}));


  /******************************************************************************
   * ADD CORS Headers
   *****************************************************************************/
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

