//Exercício 1

let number1 = 10;
let number2 = 8;

let soma = number1 + number2;
console.log(soma);

let sub = number1 - number2;
console.log(sub);

let multi = number1 * number2;
console.log(multi);

let div = number1 / number2;
console.log(div);

let mod = number1 % number2;
console.log(mod);

//Exercício 2

if (number1 > number2) {
  console.log('O maior número entre os dois é: ' + number1);
} else {
  console.log('O maior número entre os dois é: ' + number2);
}

//Exercício 3

let number3 = 25;

if (number1 > number2 && number1 > number3) {
  console.log('O maior número entre os três é: ' + number1);
} else if (number2 > number3) {
  console.log('O maior número entre os três é: ' + number2);
} else {
  console.log('O maior número entre os três é: ' + number3);
}

//Exercício 4

let positiveOrNegative = -1;

if (positiveOrNegative > 0) {
  console.log('positive');
} else if (positiveOrNegative < 0) {
  console.log('negative');
} else {
  console.log("Zero");
}

//exercício 5

let angle1 = 40;
let angle2 = 70;
let angle3 = 70;

let sumTriangle = angle1 + angle2 + angle3;
let triangleValid = angle1 > 0 && angle2 > 0 && angle3 > 0;

if (sumTriangle === 180) {
  console.log('true');
} else if (triangleValid === false) {
  console.log('Erro! Triângulo invalido.');  
} else {
  console.log('false');
}

//Exercício 6

let chessPiece = 'Rei';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('REI -> Diagonal, vertical e horizontal, apenas uma casa');
    break;

  case 'rainha':
    console.log('RAINHA -> Diagonal, vertical e horizontal');
    break;

  case 'bispo':
    console.log('BISPO -> Diagonal');
    break;

  case 'cavalo':
    console.log('CAVALO -> Movimento em L');
    break;

  case 'torre':
    console.log('TORRE -> Vertical e horizontal');
    break;

  case 'peao':
    console.log('PEÃO -> Vertical, apenas uma casa (exeto a primeira jogada, pode andar duas casas)');
    break;

  default:
    console.log('Erro! Peça invalida.');
    break;
}
