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
