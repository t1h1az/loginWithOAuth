const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;
