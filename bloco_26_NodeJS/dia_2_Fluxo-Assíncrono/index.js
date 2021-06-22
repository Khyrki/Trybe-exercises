function promise(a, b, c) {
  const promise = new Promise((result, reject) => {
    if (a !== Number && b !== Number && c !== Number) {
      reject("Informe apenas números")
    }

  })
  return promise;
};

promise(1, 2, '1')
  .then((result) => console.log(result))
  .catch((error) => console.error(error))

