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

//Exercício 7

let note = 110;

if (note >= 90 && note < 100) {
  console.log('Nota A');
} else if (note >= 80 && note < 90) {
  console.log('Nota B');
} else if (note >= 70 && note < 80) {
  console.log('Nota C');
} else if (note >= 60 && note < 70) {
  console.log('Nota D');
} else if (note >= 50 && note < 60) {
  console.log('Nota E');
} else if (note >= 0 && note < 50) {
  console.log('Nota F');
} else if (note < 0 || note > 100) {
  console.log('Erro! Nota invalida.');
}

//Exercício 8

let firstNumber = 10;
let secondNumber = 20;
let thirdNumber = 30;

allEven = false

if (firstNumber % 2 === 0 && secondNumber % 2 === 0 && thirdNumber % 2 === 0) {
  allEven = true
}

console.log(allEven);

//Exercício 9

let firstNumber = 11;
let secondNumber = 9;
let thirdNumber = 42;

allEven = true

if (firstNumber % 2 === 0 && secondNumber % 2 === 0 && thirdNumber % 2 === 0) {
  allEven = false
}

console.log(allEven);

//Exercício 10

let cost = 10;
saleValue = 50;

if (cost < 0 || saleValue < 0) {
  console.log('Erro! Valor menor que 0');
}

totalCost = cost * 0.20 + cost;
profit = saleValue - totalCost;
totalProfit = profit * 1000;

console.log(totalProfit);

//Exercício 11

let salary = 3000;
let salaryLessINSS = null;
let salaryLiquid = null;

if (salary <= 1556.94) {
  let taxINSS = salary * 0.08;
  salaryLessINSS = salary - taxINSS;
} else if (salary >= 1556.95 && salary <= 2594.92) {
  let taxINSS = salary * 0.09;
  salaryLessINSS = salary - taxINSS;
} else if (salary >= 2594.93 && salary <= 5189.82) {
  let taxINSS = salary * 0.11;
  salaryLessINSS = salary - taxINSS;
} else {
  salaryLessINSS = salary - 570.88;
}

if (salaryLessINSS <= 1903.98) {
  salaryLiquid = salaryLessINSS;
} else if (salaryLessINSS >= 1903.99 || salaryLessINSS <= 2826.65) {
  let taxIr = (salaryLessINSS * 0.075) - 142.80;
  salaryLiquid = salaryLessINSS - taxIr;
} else if (salaryLessINSS >= 2826.66 || salaryLessINSS <= 3751.05) {
  let taxIr = (salaryLessINSS * 0.15) - 354.80;
  salaryLiquid = salaryLessINSS - taxIr;
} else if (salaryLessINSS >= 3751.06 || salaryLessINSS <= 4664.68) {
  let taxIr = (salaryLessINSS * 0.225) - 636.13;
  salaryLiquid = salaryLessINSS - taxIr;
} else {
  let taxIr = (salaryLessINSS * 0.275) - 869.36;
  salaryLiquid = salaryLessINSS - taxIr;
}

console.log(salaryLiquid);
