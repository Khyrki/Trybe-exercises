let pecaXadrez = 'REI';

switch (pecaXadrez.toLowerCase()) {
  case 'peao':
    console.log ('peão -> 1 casa para frente');
    break;

  case 'torre':
    console.log ('torre -> Casas ilimitadas horizontamente ou verticalmente');
    break;

  case 'bispo':
    console.log ('bispo -> Casas ilimitadas diagonalmente');
    break;

  case 'cavalo':
    console.log ('cavalo -> Duas casas hozizontalmente ou verticalmente e então uma casa a mais em um ângulo reto');
    break;

  case 'rainha':
    console.log ('rainha -> Casas ilimitadas em todas as direções');
    break;
  
  case 'rei':
    console.log ('rei -> Apenas uma casa em todas as direções');
    break;

  default:
    console.log ('Nome nao identificado');
}
