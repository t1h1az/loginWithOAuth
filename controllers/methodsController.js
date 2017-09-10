const Method = require('../schemas/methods');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
  create(req, res, next) {
    const methodProps = req.body;
    console.log(req.body);

    const methodCreate = new Promise(function(resolve, reject) {
      Method.create({"title": "roboter", liked: true, public: true})
      .then(method => res.send(method))
      .then(() => console.log('shit'))
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
