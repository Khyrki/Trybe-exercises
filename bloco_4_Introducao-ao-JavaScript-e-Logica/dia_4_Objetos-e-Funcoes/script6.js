function verificaPalindrome(palavra) {
 
  let palavraAoContrario = '';
  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    palavraAoContrario = palavraAoContrario + palavra[index];
  
  }
  if (palavraAoContrario === palavra) {
    return (true);
  } else {
    return (false);
  }
}
  console.log (verificaPalindrome('arara'));
