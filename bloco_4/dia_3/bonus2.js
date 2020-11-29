let numero = 14;
let resultado;
let contador = 0;


for (index = 0; index <= numero; index += 1) {
  resultado = numero % index;
  if (resultado === 0) {
    contador += 1;
  }
}
if (contador === 2) {
  console.log ('O numero ',numero,' é primo');
} else {
    console.log ('O numero ',numero,' nao é primo');
}
