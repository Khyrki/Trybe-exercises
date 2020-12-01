function indiceDoMaiorValorDeUmArray(array) {
  let menor = array[0];

  for (index = 0; index < array.length; index += 1) {
    if (array[index] < menor) {
      menor = array[index];
    }
  }
  return array.indexOf(menor);
}
console.log(indiceDoMaiorValorDeUmArray([100, 10, 52, 7, 1, 5010]));