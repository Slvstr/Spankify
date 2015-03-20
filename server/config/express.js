var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');


module.exports = function(app) {

  /******************************************************************************
   * Static Routes
   *****************************************************************************/
  var rootDir = app.get('rootDir');
  app.use(express.static(rootDir + '/build/app'));
  app.use(express.static(rootDir + '/build'));
  app.use(express.static(rootDir));


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

