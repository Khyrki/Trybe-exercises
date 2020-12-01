
function indiceDoMaiorValorDeUmArray(array) {
  let maior = array[0];

  for (index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  return array.indexOf(maior);
}
console.log(indiceDoMaiorValorDeUmArray([1, 10, 52, 7, 1, 5010]));