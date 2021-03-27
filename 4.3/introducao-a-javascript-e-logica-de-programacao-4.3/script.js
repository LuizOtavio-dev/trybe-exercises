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

//4
