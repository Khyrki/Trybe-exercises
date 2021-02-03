const { TestScheduler } = require('jest');
const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
  obj1,
  obj2,
  obj3
} = require('./ex.js');

describe('Testa a função de soma', () => {
  test('Testa a funcao sum', () => {
    expect(sum(1,2)).toBe(3);
  })
  
  test('Testa se é lançado um erro passando string como paramentro na funcao sum', () => {
    expect( () => {sum('3', 2)}).toThrow();
  })
})

describe('Testa a função myRemove', () => {
  test('Remove um numero de um array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  test('Remove um numero de um array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

describe('Testa a função myRemoveWithoutCopy', () => {
  test('Remove um numero de um array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  test('Remove um numero de um array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})

describe('Testa a função myFizzBuzz', () => {
  test('Passando um paramentro diferente de number', () => {
    expect(myFizzBuzz('Hyperx')).toBe(false)
  })

  test('Passando 15 como paramentro para a funcao', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })

  test('Passando 11 como paramentro para a funcao', () => {
    expect(myFizzBuzz(11)).toBe(11)
  })
})

describe('Testa a igualdade dos Objetos', () => {
  test('Testa a igualdade do Obj1 e Obj2', () => {
    expect(obj1).toEqual(obj2)
  })

  test('Testa a desigualdade do Obj1 e Obj3', () => {
    expect(obj1).not.toEqual(obj3)
  })
})
