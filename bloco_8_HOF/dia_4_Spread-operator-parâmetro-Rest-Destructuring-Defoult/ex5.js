const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo

const swappedList = myList.map((_, index, array) => array[array.length - index - 1]);

assert.strictEqual(swappedList[0], 3)
assert.strictEqual(swappedList[1], 2)
assert.strictEqual(swappedList[2], 1)