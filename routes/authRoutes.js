const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
        // [
        //   'https://www.googleapis.com/auth/userinfo.profile',
        //   'https://www.googleapis.com/auth/userinfo.email',
        //   'https://www.googleapis.com/auth/contacts.readonly'
        // ],
        // accessType: 'offline'
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google',{
        successRedirect: '/api/current_user',
        failureRedirect: '/login'
    }),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );


  app.get('/auth/facebook',
    passport.authenticate('facebook'));

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );


  app.get('/api/logout', function(req, res) {
    // logout comes from passport
    req.logout();
    res.redirect('/');
  });
};
