var prompt = require('prompt-sync')();

let seconds_input = parseInt(prompt('Seconds Input: '));

let hours = Math.trunc(seconds_input/3600);
let minutes = Math.trunc((seconds_input%3600)/60);
let seconds = (seconds_input%3600)%60;

console.log(`Output = ${hours}h ${minutes}min ${seconds}s`)