const usersController = require('../controllers/usersController');

module.exports = (app) => {

  app.get('/api/current_user', function(req, res) {
    res.send(req.user);
  });
};
