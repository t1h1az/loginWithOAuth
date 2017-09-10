const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: String,
  userName: String,
  password: String
});

module.exports = mongoose.model('User', userSchema);
