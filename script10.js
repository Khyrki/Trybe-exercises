let a = 25;
let b = 40;
let imposto = a * 0.2;
let valorCustoTotal = a + imposto;

if (a < 0 || b < 0) {
  console.log ('Erro: algum dos valores informados é menos que zero.')
} else {
  console.log ('O lucro total ao vender mil unidades é de ',((b-valorCustoTotal)*1000),' reias')
}
