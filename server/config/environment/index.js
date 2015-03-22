'use strict';

var path = require('path');


var config = {
  env: process.env.NODE_ENV,

  // Root path
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 5000,

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session (JWT)
  secrets: {
    session: 'super duper secret'
  },

  // List of user roles
  userRoles: ['voter', 'admin'],

  // MongoDB connection options
  // mongo: {
  //   options: {
  //     db: {
  //       safe: true
  //     }
  //   }
  // },

  facebook: {
    clientID:     process.env.FACEBOOK_ID || 'id',
    clientSecret: process.env.FACEBOOK_SECRET || 'secret',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  }

}

  
// Export the config object based on the NODE_ENV
// ==============================================
module.exports = config;