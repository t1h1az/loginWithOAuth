const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./configs/keys')

const app = express();

mongoose.connect(keys.mongoURI);

const db = mongoose.connection;

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));


db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Connection established!') ;
});

app.use(passport.initialize());
app.use(passport.session());

require('./routes/routes')(app);
require('./routes/authRoutes')(app);


module.exports = app;
