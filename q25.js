var prompt = require('prompt-sync')();

let date = prompt('Date in format dd/mm/aaaa :  ');

let [dd, mm, aaaa] = date.split('/');

// let dd = date.slice(0,2);
// let mm = date.slice(3,5);
// let aaaa = date.slice(6,10);

console.log(`Day: ${dd}`)
console.log(`Month: ${mm}`)
console.log(`Year: ${aaaa}`)



