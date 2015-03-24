var express = require('express');
var router = express.Router();
var auth = require('../../auth/auth.utilities.js');

var User = require('./user.model.js');

router.get('/me', auth.isAuthenticated(), function(req, res, next) {

  User.findOne({_id: req.user._id}, function(err, user) {
    if (err) return next(err);
    if (!user) return res.sendStatus(401);
    res.json(user);
  });
});


module.exports = router;