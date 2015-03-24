angular.module('spankify')

  .factory('User', function($resource) {
    return $resource('/api/user/:id', {
      id: '@_id'
    },
    {
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
    });
  });