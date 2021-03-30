//Parte 1 Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log(info);

for (const key in info) {
  console.log(key);
}

for (const key in info) {
  console.log(info[key]);
}

let otherInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas", 
  recorrente: 'Sim',
}

for (const key in info) {
  if (info[key] === otherInfo[key]) {
    console.log('Ambas recorrentes');
  } else {
    console.log(info[key] + ' e ' + otherInfo[key]);
  }
}

//Parte 2 Funções

function palindromo(string) {
  let checksWord = '';
  for (let index = string.length - 1; index >= 0; index -= 1) {
    checksWord += string[index];
  }
  if (checksWord  === string) {
    return true
  }
   return false 
}

console.log(palindromo('arara'));

function indexLagerNumber(arrayNumbers) {
  let lagerNumber = 0;
  let indexNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let counter = 0; counter < array.length; counter += 1) {
      if (array[index] > array[counter]) {
        lagerNumber = array[index]
      }
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (lagerNumber === array[index]) {
      indexNumber = index;
    }
  }
  return indexNumber;
}

console.log(indexLagerNumber([2, 3, 6, 7, 10, 1]));

function indexSmallerNumber(arrayNumbers) {
  let smallerNumber = null;
  let indexNumber = null;
  for (let index = 0; index < array.length; index += 1) {
    for (let counter = 0; counter < array.length; counter += 1) {
      if (array[index] < array[counter]) {
        smallerNumber = array[index]
      }
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (smallerNumber === array[index]) {
      indexNumber = index;
    }
  }
  return indexNumber;
}

console.log(indexSmallerNumber([2, 4, 6, 7, 10, 0, -3]));

function nameLager(arrayStrings) {
  let name = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > name.length) {
      name = array[index]
    }
  }
  return name;
}

console.log(nameLager(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function repeatedNumber(array) {
  
}

function summation(number) {
  let sumNumber = number;
  let sum = 0;
  
  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(summation(5));
