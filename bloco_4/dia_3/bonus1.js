let n = 7;
let line = '';
let lineFinal = '';

for (let index3 = 1; index3 <= n; index3 +=1) {
  lineFinal += '*';
}

let limiteSuperior = ((n + 1) / 2);
let limiteInferior = ((n + 1) / 2);

for (let index2 = 1; index2 <= n; index2 += 1) {
  for (let index = 1; index <= n; index += 1) {
    if (limiteInferior != 1 && limiteSuperior != n) {
      if (index === limiteSuperior || index === limiteInferior) {
        line += '*';
      } else {
        line += ' ';
      }
    } else {
      line = lineFinal;
    }
  }
  console.log (line);
  limiteSuperior += 1;
  limiteInferior -= 1;
  line = '';
}

