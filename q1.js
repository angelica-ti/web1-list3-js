var prompt = require('prompt-sync')();
let bill = prompt('Enter with the bill amount: ');
let total = bill*1.1;

console.log(`Total of the bill: R$ ${total.toFixed(2)}`)