const promise1 = require("./promiseEx1")
const promise2 = require("./primiseEx2")

const param1 = Math.floor(Math.random() * 100 + 1);
const param2 = Math.floor(Math.random() * 100 + 1);
const param3 = Math.floor(Math.random() * 100 + 1);

promise1(param1, param2, param3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.error(error.message))


async function retornaPromise() {
  try {
    const result = await promise2(param1, param2, param3);
    console.log(result)
  } catch(err) {
    console.error(err)
  }
}

retornaPromise()