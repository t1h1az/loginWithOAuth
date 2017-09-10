const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../configs/keys');

const User = require('../schemas/users');

mongoose.Promise = global.Promise;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientKey,
    callbackURL: 'localhost:5000/auth/google/callback',
    proxy: true
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id})
      .then((specificUser) => {
        if (specificUser) {
          done(null, specificUser);
        } else {
          console.log("accessToken:", accessToken);
          console.log("refreshToken:", refreshToken);
          console.log("profile:", profile);
          new User({ googleId: profile.id }).save()
            .then((user) => {
              done(null, user);
              console.log('user logged back in.');
          });
        }
      });
  })
);
