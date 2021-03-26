//Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const iterator of numbers) {
  console.log(iterator);
}

//2

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  const sum = result + numbers[index]
  result = sum;
}

console.log('A soma de todos os valores é ' + result);

//3

let media = result / numbers.length;

console.log('A media é de ' + media);

//4

if (media > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

//5

let lagerNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > lagerNumber) {
    lagerNumber = numbers[index];
  }
}

console.log('O maior número é ' + lagerNumber);

//6

let counter = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    counter += 1
  }
}

if (counter === 0) {
  console.log('nenhum valor ímpar encontrado');
} else  if (counter === 1) {
  console.log('contém apenas 1 número impar');
} else {
  console.log('contém ' + counter + ' números impares');
}

//7

let smallerNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallerNumber) {
    smallerNumber = numbers[index]
  }  const element = array[index];
}

console.log('O menor número é ' + smallerNumber);

//8

let addNumbers = [];

for (let index = 1; index <= 25; index += 1) {
  addNumbers.push(index);
}

console.log(addNumbers);

//9

for (let index = 0; index < addNumbers.length; index += 1) {
  const element = addNumbers[index] / 2;
  console.log(addNumbers[index] + ' / 2 = ' + element);
}

//Bônus

//1

for (let index = 1; index < numbers.length; index += 1) {
  for (let counter = 0; counter < numbers.length; counter += 1) {
    if (numbers[index] < numbers[counter]) {
      let number = numbers[counter];
      numbers[counter] = numbers[index];
      numbers[index] = number;
    }
  }
}

console.log(numbers);

//2

for (let index = 1; index < numbers.length; index += 1) {
  for (let counter = 0; counter < numbers.length; counter += 1) {
    if (numbers[index] > numbers[counter]) {
      let number = numbers[counter];
      numbers[counter] = numbers[index];
      numbers[index] = number;
    }
  }
}

console.log(numbers);

//3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let position = 0;
let multiplicationNumbers = [];

for (let index = 1; index < numbers.length; index += 1) {
  multiplicationNumbers.push(numbers[position] * numbers[index]);
  position += 1;
}

multiplicationNumbers.push(numbers[numbers.length - 1] * 2);

console.log(multiplicationNumbers);
