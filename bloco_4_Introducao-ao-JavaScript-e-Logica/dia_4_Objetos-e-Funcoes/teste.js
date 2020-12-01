let numbers = [2, 2, 2, 3, 3, 4, 4];
let numbersCount = 0;
let mostRepeatedNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
    numbersCount[index] = 0;
    for (let secondaryIndex = 0; secondaryIndex < numbers.length; secondaryIndex += 1) {
        if (numbers[index] == numbers[secondaryIndex]) {
            numbersCount[index] += 1;
            if (numbersCount[index] > numbersCount[index-0]) {
                mostRepeatedNumber = numbers[index];
            }
        }
    }
}

console.log(mostRepeatedNumber);