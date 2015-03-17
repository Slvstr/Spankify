angular.module('spankify')
  .controller('playlistCtrl', function(Playlist, User, $scope) {

    this.songs = Playlist.getPlaylist();

    this.upVote = function(song, index, scope) {
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

    
  });