const app = require('./app');

require('./routes/routes')(app);

app.listen(3050, () => {
  console.log('Running on port 3050');
});
