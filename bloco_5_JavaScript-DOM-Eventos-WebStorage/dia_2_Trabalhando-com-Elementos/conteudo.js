let requisito1 = document.getElementById('elementoOndeVoceEsta');

let requisito2 = document.getElementById('elementoOndeVoceEsta').parentNode;
requisito2.style.backgroundColor = 'red';

let requisito3 = document.getElementById('primeiroFilho');
requisito3.innerText = 'tudo bem com vc'

let requisito4 = document.querySelector('#pai')
requisito4.children[1].children[0];

let requisito5 = document.getElementById('elementoOndeVoceEsta');
requisito5.previousElementSibling;

/*let requisito6 = document.getElementById('elementoOndeVoceEsta')
console.log(requisito6.parentNode.innerText.includes('Atenção!'))*/

let requisito7 = document.getElementById('elementoOndeVoceEsta');
requisito7.nextElementSibling;

let requisito8 = document.getElementById('pai');
console.log(requisito8.children[2]);

