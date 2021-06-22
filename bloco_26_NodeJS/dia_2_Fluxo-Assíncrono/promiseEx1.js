function promise(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      reject(new Error("Informe apenas números"))
    }
    const resultado = (a + b) * c;
    if(resultado < 50) {
      reject(new Error("Valor muito baixo"))
    }
    resolve(resultado)
  })
};

const param1 = Math.floor(Math.random() * 100 + 1);
const param2 = Math.floor(Math.random() * 100 + 1);
const param3 = Math.floor(Math.random() * 100 + 1);

promise(param1, param2, param3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.error(error.message))