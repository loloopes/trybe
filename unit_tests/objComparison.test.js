const {obj1, obj2, obj3} = require('./objComparison');

describe('Requisito 5, compara se 2 objetos sao iguais', () => {
  test('If obj1 is equal obj2', () => {
    expect(obj1).toEqual(obj2)
  })
  
  test('If obj1 is not equal obj3', () => {
    expect(obj1).not.toEqual(obj3)
  })

  test('If obj2 is not equal obj3', () => {
    expect(obj2).not.toEqual(obj3)
  })

  // test("Não deveria passar!", () => {
  //   setTimeout(() => {
  //     expect(10).toBe(5);
  //     console.log('Deveria falhar!')
  //     done();
  //   }, 500);
  // });

  // const SumNumbers = (a, b, callback) => {
  //   setTimeout(() => {
  //     const result = a + b;
  //     callback(result);
  //   }, 500)
  // }
  
  // test('Testando SumNumbers, soma 5 mais 10', done => {
  //   SumNumbers(5, 10, (result) => {
  //     expect(result).toBe(10);
  //     done();
  //   });
  // })
})