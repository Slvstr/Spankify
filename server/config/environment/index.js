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
    clientID:     process.env.FACEBOOK_ID || '1567162873555170',
    clientSecret: process.env.FACEBOOK_SECRET || 'cc423c8c6a92c3d9317e2d9705d0c236',
    callbackURL:  (process.env.DOMAIN || '') + './auth/facebook/callback'
  }

}

  
// Export the config object based on the NODE_ENV
// ==============================================
module.exports = config;