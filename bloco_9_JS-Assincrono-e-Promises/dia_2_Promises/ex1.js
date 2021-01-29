const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then((response) => {
      console.log(response);
    })
 
};

window.onload = () => fetchJoke();