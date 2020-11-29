let n = 5;
let line = '';
let limiteSuperior = ((n+1) / 2);
let limiteInferior = ((n+1) / 2);

for (index2 = 1; index2 <= ((n+1) / 2); index2 += 1) {
  for (index = 1; index <= n; index += 1) {
    if (index < limiteInferior || index > limiteSuperior) {
      line += ' ';
    } else {
      line += '*';
    }
  }
  console.log (line);
  limiteSuperior += 1;
  limiteInferior -= 1;
  line = '';
}

// □ □ * □ □
// □ * * * □   

