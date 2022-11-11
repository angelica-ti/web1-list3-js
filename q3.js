var prompt = require('prompt-sync')();

let length = parseFloat(prompt('Length: '));
let width = parseFloat(prompt('Width: '));
let height = parseFloat(prompt('Height: '));

let volume = length*width*height;

console.log(`Box volume: ${volume} cubic meters`)