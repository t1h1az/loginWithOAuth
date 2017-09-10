const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(3050, () => {
  console.log('Running on port 3050');
});
