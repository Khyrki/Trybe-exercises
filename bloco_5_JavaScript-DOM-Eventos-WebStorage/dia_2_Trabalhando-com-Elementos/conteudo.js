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
requisito8.children[2];

let requisito9 = document.createElement('div');
requisito9.innerText = "requisito 9";
requisito9.style.backgroundColor = 'black';
requisito4.appendChild(requisito9);

let requisito10 = document.createElement('div');
requisito10.innerText = 'requisito 10'
requisito5.appendChild(requisito10);

/*let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
 
//let quartoFilho = document.getElementById('quartoEUltimoFilho');
//requisito8.removeChild(quartoFilho);

let bodyy = document.getElementById('bodyy');
let paidopai = document.getElementById('paiDoPai')
bodyy.removeChild(paidopai)

bodyy.appendChild(paidopai.children[0])
bodyy.appendChild(requisito4.children[1])
*/

for (let index = 0; index < )
