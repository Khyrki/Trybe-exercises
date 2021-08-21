const socket = window.io();

const btns = document.querySelectorAll('.bid-button');

socket.on('setInitialValues', (initialValue) => {
  Object.entries(initialValue).forEach((iten) => {
    document.querySelector(`.${iten[0]}`).innerHTML = iten[1];
  });
})

btns.forEach((btn) => {
  btn.addEventListener('click', ({ target }) => {
    const name = target.name;
    const value = document.querySelector(`.${target.name}`).innerHTML
    if (Number(value) < 100) {
      socket.emit('lance', { value, name })
    } else {
      btn.disabled = true;
    }
  })
})

socket.on('newPrice', ({ newPrice, name }) => {
  console.log(name)
  const value = document.querySelector(`.${name}`);
  value.innerHTML = newPrice.toString();
})




