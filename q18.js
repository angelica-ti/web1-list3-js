let sum3 = 0, sum5 = 0;

for(let i=0;i<=100;i++){
    if(i%3==0){
        sum3+=i;
    }    
}

for(let j=100;j<=200;j++){
    if(j%5==0){
        sum5+=j;
    }    
}

console.log(`Sum of dividers of 3: ${sum3}`);
console.log(`Sum of dividers of 5: ${sum5}`);