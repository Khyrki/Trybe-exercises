
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  
  const newMatriz = arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  });
  return newMatriz
}
assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);