
const fizzBuzz = require('./fizzBuzz');

describe('Requisito 4 fizzBuzz', () => {
  test('If 15 = fizzbuzz', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz')
  })

  test('If 3 = fizz', () => {
    expect(fizzBuzz(3)).toBe('fizz')
  })

  test('If 3 = fizz', () => {
    expect(fizzBuzz(5)).toBe('buzz')
  })
})