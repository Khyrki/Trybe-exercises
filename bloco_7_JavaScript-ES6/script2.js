const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function sortfunction(a, b){
  return (a - b)
}

const ordenaArray = () => {
  let arrayOrdenado = oddsAndEvens.sort(sortfunction);
  console.log(`Os números ${arrayOrdenado} se encontram ordenados de forma crescente!`);
}
ordenaArray();
