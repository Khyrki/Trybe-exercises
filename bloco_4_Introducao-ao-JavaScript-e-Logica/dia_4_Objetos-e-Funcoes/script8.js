function indiceDoMaiorValorDeUmArray(array) {
  let menor = array[0];

  for (index = 0; index < array.length; index += 1) {
    if (array[index] < menor) {
      menor = array[index];
    }
  }
  return array.indexOf(menor);
}
console.log(indiceDoMaiorValorDeUmArray([2, 4, 6, 7, 10, 0, -3]));