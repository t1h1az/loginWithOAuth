const methodsController = require('../controllers/methodsController');

module.exports = (app) => {

  app.get('/api/current_user', function(req, res) {
    res.send(req.user);
  });
};
