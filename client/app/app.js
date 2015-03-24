
angular.module('spankify', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial', 'ngResource']);

/******************************************************************************
 * App-Level Controller
 *****************************************************************************/
angular.module('spankify')
  .controller('appCtrl', function($mdSidenav, Auth) {
    this.toggleNav = function() {
      $mdSidenav('left').toggle().then(function() {
        console.log('toggled nav');
      });
    };

    this.currentUser = Auth.getCurrentUser();
  });