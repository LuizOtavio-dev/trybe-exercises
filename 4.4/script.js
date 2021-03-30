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

let checksWord = '';

function palindromo(string) {
  for (let index = string.length - 1; index >= 0; index -= 1) {
    checksWord += string[index];
  }
  if (checksWord  === string) {
    return true
  }
   return false 
}

console.log(palindromo('arara'));
