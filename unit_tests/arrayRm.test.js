const arrRm = require('./arrayRm');

describe('Requisito 2, remove array`s item', () => {
  // const expected = [1, 2, 4];
  test('If given a number will remove it from array' , () => {
    expect(arrRm([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  test('If given a number do not return the same array', () => {
    expect(arrRm([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  test('If given array suffered alterations,', () => {
    expect(arrRm([1, 2, 3, 4], null)).toEqual([1, 2, 3, 4])
  })

  test('If given array suffered alterations,', () => {
    expect(arrRm([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})