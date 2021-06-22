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

promise(1, 2, 100)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.error(error.message))


