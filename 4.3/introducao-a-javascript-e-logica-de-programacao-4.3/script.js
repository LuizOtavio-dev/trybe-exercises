let number = 5;
let asteris = []

for (let index = 0; index < number; index += 1) {
  for (let counter = 0; counter < number; counter += 1) {
    asteris[counter] = '*';    
  }
  console.log(asteris);
}

