const fatorial = (number) => {
  let resultado = 1;
  if (number > 0) {
    for (let index = 1; index <= number; index += 1) {
      resultado *= index;
    }
  }
  console.log(resultado);
}
fatorial(5);