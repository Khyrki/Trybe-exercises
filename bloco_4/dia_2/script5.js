let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
let soma;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
  if (numbers[index] > maior) {
    maior = numbers[index];
  };
};

console.log ('O número maior do array é: ', maior);