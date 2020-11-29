let salario = 1500;
let liquidoINSS = salario;

if (salario <= 1556.94) {
    liquidoINSS *= 0.92;
} else if (salario >= 1556.95 && salario <= 2594.92) {
    liquidoINSS *= 0.91;
} else if (salario >= 2594.93 && salario <= 5189.82) {
    liquidoINSS *= 0.89;
} else {
    liquidoINSS -= 570.88; 
};

let liquidoIR = liquidoINSS;
let impostoIR;

if (liquidoIR >= 1903.99 && liquidoIR <= 2826.65) {
    impostoIR = ((liquidoIR * 0.075) - 142.8);
    liquidoIR -= impostoIR;
} else if (liquidoIR >= 2826.66 && liquidoIR <= 3751.05) {
    impostoIR = ((liquidoIR * 0.15) - 354.80);
    liquidoIR -= impostoIR;
} else if (liquidoIR >= 3751.06 && liquidoIR <= 4664.68) {
    impostoIR = ((liquidoIR * 0.225) - 636.13);
    liquidoIR -= impostoIR;
} else if (liquidoIR > 4664.68) {
    impostoIR = ((liquidoIR * 0.275) - 869.36);
    liquidoIR -= impostoIR;
};

console.log ('O salario liquido é: ',liquidoIR) ;