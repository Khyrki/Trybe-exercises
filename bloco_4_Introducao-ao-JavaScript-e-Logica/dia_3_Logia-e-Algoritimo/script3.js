let n = 5;
let line = '';
let condition = (n - 1);

for (let index = 0; index < n; index += 1) {
  for (let index2 = 0; index2 < n; index2 += 1) {
    if (index2 < condition) {
      line += ' ';
    } else {
      line += '*'
    }
  }
  console.log (line)
condition -= 1
line = '';
}
