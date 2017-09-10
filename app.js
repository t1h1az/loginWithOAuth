const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');

const app = express();

mongoose.connect('mongodb://localhost:27017/passportTrainingDb');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Connection established!') ;
});

app.use(passport.initialize());
app.use(passport.session());

// require('./routes/authRoutes')(app);
// require('./routes/billingRoutes')(app);


module.exports = app;
