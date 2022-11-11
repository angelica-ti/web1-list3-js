var prompt = require('prompt-sync')();
let ray = parseFloat(prompt('Ray: '));
let diameter = 2*ray;
const pi = 3.14159;
let length = 2*pi*ray;
let area = pi*ray**2;

console.log(`\nDiameter: ${diameter.toFixed(2)}\nLength: ${length.toFixed(2)}\nArea: ${area.toFixed(2)}`)