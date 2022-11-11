let sum=1, sum1 = 1;

//1 + 2 + 4 + 8 + 16 + ...
for(let i=1; i<=64; i++){
    console.log(`${i}°: ${sum1}`);
    sum1 = 2*sum1;
    sum += sum1;
}

console.log(`Sum: ${sum}`)