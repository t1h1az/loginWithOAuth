const User = require('../schemas/users');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
  create(req, res, next) {
    const methodProps = req.body;
    console.log(req.body);

    const userCreate = new Promise(function(resolve, reject) {
      User.create({})
      .then(method => res.send(method))
      .then(() => console.log('userbuser'))
      .catch(next);
    })
  },
  read(req, res, next) {
    console.log('something');
  },
  edit(req, res, next) {

  }
  //create
  //update
  //delete
};
