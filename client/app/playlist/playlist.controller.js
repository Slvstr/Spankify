angular.module('spankify')
  .controller('playlistCtrl', function(Playlist, Auth, $http) {

    this.songs = Playlist.getPlaylist();

    this.currentUser = Auth.getCurrentUser();

    this.upVote = function(song, index) {
      song.votes++;
      song.voters[this.currentUser.name] = 1;

    };


    this.removeVote = function(song) {
      song.votes--;
      if (song.voters[this.currentUser.name] > 0) {
        song.voters[this.currentUser.name] = 0;
      }
      else {
        song.voters[this.currentUser.name] = -1;
      }

    };

    this.userUpvoted = function(song) {
      return song.voters[this.currentUser.name] > 0;
    };

    this.userDownvoted = function(song) {
      return song.voters[this.currentUser.name] < 0;
    };


    
  });