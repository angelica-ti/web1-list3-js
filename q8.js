var prompt = require('prompt-sync')();

let number = parseInt(prompt('Number: '));

let evenOdd = number%2 ? "odd" : "even";

console.log(`The number is ${evenOdd}`)