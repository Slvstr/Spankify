angular.module('spankify')

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $urlRouterProvider.otherwise('home');

    $stateProvider

      .state('/home', {
        url: '/'
      })

      .state('/playlist', {
        url: '/playlist/:id',
        templateUrl: './playlist/playlist.html',
        controller: 'playlistCtrl',
        controllerAs: 'playlist'

      });

  });