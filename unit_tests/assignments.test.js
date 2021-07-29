const getUserName = require('./assignments')

describe('Exercise 2' , () => {
  it('should return the name of a given id', () => {
    expect.assertions(1);
    return getUserName(4)
      .then( name => expect(name).toBe('Bob'))
  })
})
