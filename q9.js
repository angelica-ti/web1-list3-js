var prompt = require('prompt-sync')();

let number = parseInt(prompt('Number: '));

let hundreds = Math.trunc(number/100);
let tens = Math.trunc((number%100)/10);
let unit = Math.trunc((number%100)%10);

let inversed = unit.toString()+tens.toString()+hundreds.toString();

console.log(`Inversed Number: ${inversed}`)
