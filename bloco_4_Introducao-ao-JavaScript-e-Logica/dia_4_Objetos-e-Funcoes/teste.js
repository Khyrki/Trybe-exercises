
function indiceDoMaiorValorDeUmArray(array) {
  let maior = array[0];

  for (index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = index;
    }
  }
  return maior;
}
console.log(indiceDoMaiorValorDeUmArray([2, 3, 6, 7, 10, 1]);