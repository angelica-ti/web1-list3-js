var prompt = require('prompt-sync')();

let number = prompt('Number: ');

let factorial = number;

for(let i=number-1; i>=1; i--){
    factorial *= i;
}

console.log(`Factorial: ${factorial}`)


