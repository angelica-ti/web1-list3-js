var prompt = require('prompt-sync')();

let number = prompt('Number: ');

console.log(`\nMultiplication Table`);
for(let i=1; i<=10; i++){
    console.log(`${number} x ${i} = ${number*i}`)
}