var prompt = require('prompt-sync')();

let N = parseInt(prompt('Number of Elements: '));
let vector = new Array(N);

let smaller = Math.pow(10, 1000), larger = 0;
for(let i=0;i<N;i++){
    vector[i] = parseInt(prompt(`${i+1}° element: `));
    if(vector[i]<smaller){
        smaller = vector[i];
    }
    if(vector[i]>larger){
        larger = vector[i];
    }
}

console.log(`\nSmaller:${smaller}\nLarger:${larger}`);

