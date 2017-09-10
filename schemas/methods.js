const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const methodSchema = new Schema({
  title: String,
  category: String,
  body: String,
  tags: [],
  liked: Boolean,
  public: Boolean
});

const Driver = mongoose.model('Method', methodSchema);
module.exports = Driver;
