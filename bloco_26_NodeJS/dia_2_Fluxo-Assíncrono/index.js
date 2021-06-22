function promise(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      return reject(new Error("Informe apenas números"))
    }
    const resultado = (a + b) * c;
    resolve(resultado);
  })
};

promise(1, 2, "3")
  .then((resolve) => console.log(resolve))
  .catch((error) => console.error(error.message))


