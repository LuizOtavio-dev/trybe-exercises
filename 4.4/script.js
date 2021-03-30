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

function repeatedNumber(arrayNumbers) {
  let repeated = 0;
  let counterNumber = 0;
  let indexNumber = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    for (let counter = 0; counter < arrayNumbers.length; counter += 1) {
      if (arrayNumbers[index] === arrayNumbers[counter]) {
        counterNumber += 1;
      }
    }
    if (counterNumber > repeated) {
      repeated = counterNumber;
      indexNumber = index
    }
    counterNumber = 0;
  }
  return arrayNumbers[indexNumber];
}

console.log(repeatedNumber([2, 3, 2, 5, 8, 2, 3]));

function summation(number) {
  let sumNumber = number;
  let sum = 0;
  
  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(summation(5));

function checkWord(string1, string2) {
  let word1 = string1[string1.length -2] + string1[string1.length - 1];
  let word2 = string2[0] + string2[1];
  if (word1 === word2) {
    return true;
  }
  return false;
}

console.log(checkWord('word', 'ending'));
