const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// before runs only one time before your entire test runs.
// in contrary beforeEach runs with every test
// we only need ti connect to mongo once
//
before((done) => {
  mongoose.connect('mongodb://ppadmin:Fc85qtjffbCMbV@ds133004.mlab.com:33004/ghostprojecttest');
  mongoose.connection
    .once('open', () => {
      console.log(mongoose.connection.collections);
      done();
    })
    .on('error', (error) => {
      console.warn('warning', error);
    });
});

// Drop test collections after test has run through
beforeEach((done) =>{
  const { users } = mongoose.connection.collections;  // simply loads all collections into consts
  users.drop(() => {
  //   comments.drop(() => {
  //     blogposts.drop(() => {
           done();
  //     });
  //   });
  });
});


// what is this file doing???
// => connecting to database and emptying database before every new test.
