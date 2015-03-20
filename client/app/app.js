
angular.module('spankify', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial']);

/******************************************************************************
 * App-Level Controller
 *****************************************************************************/
angular.module('spankify')
  .controller('appCtrl', function($mdSidenav) {
    this.toggleNav = function() {
      $mdSidenav('left').toggle().then(function() {
        console.log('toggled nav');
      });
    };
  });