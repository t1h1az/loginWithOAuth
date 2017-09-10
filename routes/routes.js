const userRoutes = require('../routes/userRoutes');
const usersController = require('../controllers/usersController');

const methodsController = require('../controllers/methodsController');
const express = require('express');

module.exports = (app) => {

  app.get('/api/method', methodsController.read);
  app.post('/api/createMethod', methodsController.create);
  app.put('/api/methods/:id', methodsController.edit);


  app.get('/', function(req, res) {
    res.send('App running');
  });
  // app.use(express.static('client/build'));
  //
  // const path = require('path');
  //
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });
};
