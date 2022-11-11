var prompt = require('prompt-sync')();

let N = parseInt(prompt('Number of Elements: '));
let vector = new Array(N);
let sum = 0;

for(let i=0;i<N;i++){
    vector[i] = parseInt(prompt(`${i+1}° element: `));
    sum += vector[i];
}

console.log(vector);
let average = sum/vector.length;

console.log(`\nAverage: ${average}`);