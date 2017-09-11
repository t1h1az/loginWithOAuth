const assert = require('assert'); //checks if condition is true
const User = require('../schemas/users');

describe('Creating records', () =>{
  it('saves a user', (done) =>{
    const joe = new User({
      firstName: 'John',
      lastName: 'Doe',
      userName: 'Striegl7',
      password: 'maelfjka'
    });
    
    joe.save()
      .then(() => {
        assert(!joe.isNew);
        done();
    });
  });
});
