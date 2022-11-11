var prompt = require('prompt-sync')();

let price = parseFloat(prompt('Price: '));

let entrance, installments;

installments = Math.trunc(price/3);

entrance = price - 2 * installments;

console.log(`\nEntrance: ${entrance}\nInstallments: ${installments}`)