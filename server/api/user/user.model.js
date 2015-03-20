var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  password: String,
  token: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;