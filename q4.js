var prompt = require('prompt-sync')();

let fnumber = parseInt(prompt('First number:'));
let snumber = parseInt(prompt('Second number:'));

let sum = fnumber + snumber;
let product = fnumber * snumber;
let difference = fnumber - snumber;
let quotient = fnumber / snumber;
let remainder = fnumber % snumber;

console.log(`\nSum: ${sum}\nProduct: ${product}\nDifference: ${difference}\nQuotient: ${quotient.toFixed(2)}\nRemainder: ${remainder}`)
