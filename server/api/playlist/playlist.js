/******************************************************************************
 * Controller for playlists

 * Handles both conventional http requests for uploading playlists
 * from the admin client and socket events from the voters

 * Handle ending the playlist while clients are connected (redirect them somewhere?) or
 * maybe just send a message notifying them and let angular logic redirect.  

 *****************************************************************************/


// module.exports = function(io) {
//   return {
//     router: router,
//     socket: socket
//   }

//   ...
// }

/******************************************************************************
 * Ideas

* Use socket.io namespaces created for each playlist/:id ?

* Client connects to a specific namespace when the user selects
* an event/playlist.  On conncetion we send back the current state of the playlist

* Or just go all out with socket.io.  Have new playlists send a create message
* with the playlist data that we broadcast out to all clients.  

 *****************************************************************************/

(function() {
  'use strict';

  var express = require('express');
  var router = express.Router();



  function socket(io) {
    io.on('connection', function(socket) {
      socket.on('vote', function(data) {
        // handle socket events for voting.
        // Let clients know when order has changed
        // Let clients know after songs are played (and maybe length information so they can disable 
        // voting before race conditions occur)
        // Later: handle adding new songs

      })
    });
  }

  // router.post(function(req, res, next) {
  //   // Handle uploading new playlists from admin client
  //   // Need to deal with both a new event and a new playlist within an existing event
  // })


module.exports.router = router;
module.exports.socket = socket;

})();