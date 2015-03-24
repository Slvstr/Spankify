angular.module('spankify')
  .controller('playlistCtrl', function(Playlist, User, $http) {

    this.songs = Playlist.getPlaylist();

    this.upVote = function(song, index) {
      song.votes++;
      song.voters[User.username] = 1;

    };


    this.removeVote = function(song) {
      song.votes--;
      if (song.voters[User.username] > 0) {
        song.voters[User.username] = 0;
      }
      else {
        song.voters[User.username] = -1;
      }

    };

    this.userUpvoted = function(song) {
      return song.voters[User.username] > 0;
    };

    this.userDownvoted = function(song) {
      return song.voters[User.username] < 0;
    };


    this.showUserInfo = function() {
      var self = this;
      console.log('calling user api');
      $http.get('/api/user/me').then(function(response) {
        self.currentUser = response.data;
      });
    };

    
  });