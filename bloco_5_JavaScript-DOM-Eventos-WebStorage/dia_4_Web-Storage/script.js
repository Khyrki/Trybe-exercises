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
