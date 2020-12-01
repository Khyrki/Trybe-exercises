function somatoriaDeTodosOsInteiros (n) {
  let somatoria = 0;
  let decremento = n;

  for (let index = 0; index < n; index += 1) {
  somatoria += decremento;
  decremento -= 1;
  }
  return (somatoria);
}

console.log (somatoriaDeTodosOsInteiros(100));