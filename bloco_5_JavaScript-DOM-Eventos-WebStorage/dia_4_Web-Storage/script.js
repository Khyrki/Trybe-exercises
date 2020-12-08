function changePageBackgroundColor () {
  let header = document.querySelector('#header');
  let changeColorButton = document.createElement('button');

  header.appendChild(changeColorButton);
  changeColorButton.innerText = 'Dark Mode'

  changeColorButton.addEventListener('click',function() {
    let corpo = document.getElementsByTagName('body')
    
    if (corpo[0].style.backgroundColor == 'rgb(240, 240, 240)') {
      corpo[0].style.backgroundColor = 'black';
      corpo[0].style.color = 'white'
    } else {
      corpo[0].style.backgroundColor = 'rgb(240, 240, 240)';
      corpo[0].style.color = 'black'
    }
  })
}

changePageBackgroundColor();

console.log (document.querySelector('body').style.backgroundColor)