angular.module('spankify')

  .controller('loginCtrl', function() {

    this.user = {};

    this.login = function(user) {
      console.log('username: ' + user.username);
      console.log('password: ' + user.password);
    };

  });