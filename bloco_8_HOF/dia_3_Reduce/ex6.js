
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  // escreva seu código aqui
  const averageGrades = grades.map((grade) => {
    return grade.reduce((accumulator, currentValue) => {
      return accumulator += currentValue / grade.length
    }, 0);
  })
  const newArrey = students.map((studant, index) => {
    return {
      name:studant,
      average:Number(averageGrades[index].toFixed(1))
    }
  }, [])
  return newArrey;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];


assert.deepStrictEqual(studentAverage(), expected);