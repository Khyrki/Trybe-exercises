function inteiroQueMaisSeRepete (array) {
  let numero = 0;
  let numeroQueMaisSeRepete = 0;
  let numeroDeVezes = 0;
  for (let index = 0; index < array.length; index += 1) {
    numero = array[index];
    contador = 0;
    for (let index2 = 0; index2 < array.length; index2 +=1) {
      if (array[index2] === numero) {
        contador +=1 ;
      }
    }
    if (numeroDeVezes < contador) {
      numeroDeVezes = contador;
      numeroQueMaisSeRepete = array[index];
    }
  }
  return (numeroQueMaisSeRepete)
}
console.log(inteiroQueMaisSeRepete([1, 1, 1, 4, 4, 4, 4]));