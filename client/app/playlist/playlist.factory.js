angular.module('spankify')
  .factory('Playlist', function() {
    return {
      songs: [
        {title: 'Oops I Did It Again', artist: 'Britany Spears', votes: 2, voters: {}},
        {title: 'The First Single', artist: 'The Format', votes: -1, voters: {}},
        {title: 'The Mixed Tape', artist: 'Jacks Mannequin', votes: 2, voters: {}},
        {title: 'Turn Down For What', artist: 'Lil John', votes: 11, voters: {}},
        {title: 'Best I Ever Had', artist: 'Drake', votes: 6, voters: {}}
      ],

      getPlaylist: function() {
        return this.songs;
      }
    };
  });
