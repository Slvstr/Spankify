angular.module('spankify')

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $urlRouterProvider.otherwise('/login');

    $stateProvider

      .state('/home', {
        url: '/'
      })

      .state('/login', {
        url: '/login',
        templateUrl: './login/login.html',
        controller: 'loginCtrl',
        controllerAs: 'login'
      })

      .state('/playlist', {
        url: '/playlist/:id',
        templateUrl: './playlist/playlist.html',
        controller: 'playlistCtrl',
        controllerAs: 'playlist'

      });

  });