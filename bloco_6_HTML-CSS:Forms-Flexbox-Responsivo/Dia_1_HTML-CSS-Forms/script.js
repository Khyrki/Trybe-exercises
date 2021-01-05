const estados = document.querySelector('#estado');
const listaEstados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal'];
const sendButton = document.querySelector('#send');
const recoverItems = document.querySelectorAll('.recover');
const recoverDiv = document.querySelector('#recover-div');
const cleanButton = document.querySelector('#clean');

function createStateList() {
  for (let index = 0; index < listaEstados.length; index += 1) {
    const criaEstado = document.createElement('option');
    estados.appendChild(criaEstado);
    criaEstado.innerText = listaEstados[index];
  }
}
createStateList();

function setMaxDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  let yyyy = today.getFullYear();
   if(dd<10){
          dd='0'+dd
      } 
      if(mm<10){
          mm='0'+mm
      } 
  
  today = yyyy+'-'+mm+'-'+dd;
  document.getElementById("date").setAttribute("max", today);  
}
setMaxDate();

function retrievesValues() {
  sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    for(let index = 0; index < recoverItems.length; index += 1) {
      if (recoverItems[index].type === 'radio' && !recoverItems[index].checked) {
        continue;
      }
      if(recoverItems[index].name === 'Estado:' || recoverItems[index].name === 'Resumo do currículo:') {
        const newParagraph = document.createElement('p');
      recoverDiv.appendChild(newParagraph);
      newParagraph.innerText = `${recoverItems[index].name} ${recoverItems[index].value}`;
      } else {
        const newParagraph = document.createElement('p');
        recoverDiv.appendChild(newParagraph);
        newParagraph.innerText = `${recoverItems[index].alt} ${recoverItems[index].value}`;
      }
    }
  });
}
retrievesValues();

function cleanForm() {
  cleanButton.addEventListener('click', function () {
    for(let index = 0; index < recoverItems.length; index += 1) {
      recoverItems[index].value = '';
    }
    recoverDiv.innerHTML = '';
  });
}
cleanForm();
