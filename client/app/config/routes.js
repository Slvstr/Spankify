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
        templateUrl: './components/auth/login/login.html',
        controller: 'loginCtrl',
        controllerAs: 'login'
      })

      .state('/playlist', {
        url: '/playlist/:id',
        templateUrl: './playlist/playlist.html',
        controller: 'playlistCtrl',
        controllerAs: 'playlist',
        authenicate: true

      });

  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });