angular.module('spankify')

  .controller('loginCtrl', function($window) {

    this.loginOauth = function(provider) {
      console.log($window.location.href);
      $window.location.href = '/auth/' + provider;
    };

  });