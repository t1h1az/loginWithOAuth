const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const app = express();


app.use(passport.initialize());
app.use(passport.session());


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3030, function () {
  console.log('Example app listening on port 3000!')
})
