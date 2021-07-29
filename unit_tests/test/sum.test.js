const { test, expect } = require('@jest/globals');
const soma = require('./sum');

describe('Requisito 1, testa a soma entre a e b', () => {
  test('If 4 + 5 = 9', () => {
    expect(soma(4,5)).toEqual(9)
  })
  test('If 0 + 0 = 0', () => {
    expect(soma(0,0)).toEqual(0)
  })
  test('If throws error when using string as parameter', () => {
    expect(() => {
      soma(4, '5');
    }).toThrowError(/^parameters must be numbers$/);
  })
})