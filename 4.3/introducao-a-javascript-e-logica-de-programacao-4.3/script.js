//Exercício 1

let number = 5;
let asteris = []

for (let index = 0; index < number; index += 1) {
  for (let counter = 0; counter < number; counter += 1) {
    asteris[counter] = '*';    
  }
  console.log(asteris);
}

//2

number = 5;
asteris = []

for (let index = 0; index < number; index += 1) {
  asteris[index] = '*';
  console.log(asteris);
}

//3

number = 5;
asteris = []

for (let index = 0; index < number; index += 1) {
  asteris[index] = ' ';    
}

for (let index = 0; index < number; index += 1) {
  asteris.shift();
  asteris.push('*')
  console.log(asteris);
}

//4 (Gabarito Trybe 4.3)

number = 5;
asteris = '*';
line = '';
let position = (number + 1) / 2;
let left = position;
let right = position;

for (let index = 0; index < position; index += 1) {
  for (let counter = 0; counter <= number; counter += 1) {
    if (counter <= right && counter >= left) {
      line = line + asteris;
    } else {
      line = line + ' ';
    }    
  }
  console.log(line);
  line = '';
  right += 1;
  left -= 1;
}

//Bônus
//5 (Gabatiro Trybe 4.3)

number = 5;
asteris = '*';
line = '';
let position = (number + 1) / 2;
let left = position;
let right = position;

for (let index = 1; index <= position; index += 1) {
  for (let counter = 1; counter <= number; counter += 1) {
    if (counter === right || counter === left || index === position) {
      line = line + asteris;
    } else {
      line = line + ' ';
    }    
  }
  console.log(line);
  line = '';
  right += 1;
  left -= 1;
}

//6

number = 31;
let primoNumber = 1;

for (let index = 2; index <= number; index += 1) { 
  if (number % index === 0) {
    primoNumber += 1;
  }
}

if (primoNumber === 2) {
  console.log(number + ' é um número primo');
} else {
  console.log(number + ' não é um número primo');
}
