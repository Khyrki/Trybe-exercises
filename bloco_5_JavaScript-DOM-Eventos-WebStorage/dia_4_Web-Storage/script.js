function changePageBackgroundColor () {
  let corpo = document.getElementsByTagName('body')
  let header = document.querySelector('#header');
  let changeColorButton = document.createElement('button');
  corpo[0].style.backgroundColor = localStorage.getItem('backgroundColor');
  document.body.style.color = localStorage.getItem('fontColor');

  header.appendChild(changeColorButton);
  changeColorButton.innerText = 'Dark Mode'

  changeColorButton.addEventListener('click',function() {
    
    localStorage.setItem ('backgroundColor', 'rgb(240, 240, 240)')
    localStorage.setItem ('fontColor', 'black')
    if (corpo[0].style.backgroundColor === (localStorage.getItem('backgroundColor'))) {
      corpo[0].style.backgroundColor = 'black';
      corpo[0].style.color = 'white'
      localStorage.backgroundColor = 'black'
      localStorage.fontColor = 'white'
    } else {
      corpo[0].style.backgroundColor = 'rgb(240, 240, 240)';
      corpo[0].style.color = 'black'
      localStorage.backgroundColor = 'rgb(240, 240, 240)'
      localStorage.fontColor = 'black'
    }
  })
}

changePageBackgroundColor();

function increaseTextSize() {
  localStorage.getItem('tamanho')
  document.body.style.fontSize = localStorage.getItem('tamanho');
  let fontSize = parseInt(localStorage.getItem('tamanho').slice(0, -1));
  let increase = 5;
  const myButton = document.querySelector('#btn-incr-text-size')
  let bodyStyle = document.body.style
  myButton.addEventListener('click', () => {
    localStorage.setItem('tamanho','')
    fontSize += increase;
    bodyStyle.fontSize = fontSize + '%';
    localStorage.tamanho = bodyStyle.fontSize
  })
  const myButton2 = document.querySelector('#botao2')
  let bodyStyle2 = document.body.style
  myButton2.addEventListener('click', () => {
    localStorage.setItem('tamanho','')
    fontSize = fontSize - increase;
    bodyStyle2.fontSize = fontSize + '%';
    localStorage.tamanho = bodyStyle2.fontSize
  })
 
}
increaseTextSize()
