function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let daysOfWeek = document.querySelector('#days');

for (let index = 0; index < dezDaysList.length; index += 1) {
  let li = document.createElement('li');
  li.className = 'day';
  li.innerText = dezDaysList[index]
  daysOfWeek.appendChild(li);
}

//let dias = document.querySelector('#days');
let dia = daysOfWeek.children;
for (let index = 0; index < dia.length; index += 1) {
 if (dia[index].innerText === '24' || dia[index].innerText === '25' || dia[index].innerText === '31') {
  dia[index].classList.add ('holiday');
 } 

 if (dia[index].innerText === '4' || dia[index].innerText === '11' || dia[index].innerText === '18' || dia[index].innerText === '25') {
  dia[index].classList.add ('friday');
 }
}



