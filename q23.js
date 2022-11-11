var prompt = require('prompt-sync')();

let N = parseInt(prompt('Number of Elements: '));
let vector = new Array(N);

for(let i=0;i<N;i++){
    vector[i] = parseInt(prompt(`${i+1}° element: `));
}

for(let i=0;i<N-1;i++){
    let smaller = vector[i];
    let aux;
    for(let j=i+1;j<N;j++){
        if(vector[j]<smaller){
            aux = smaller;
            smaller = vector[j];
            vector[j] = aux;
        }
    }
    console.log(smaller);
    vector[i] = smaller;
}

console.log(`\nSorted Vector: ${vector}`);