var prompt = require('prompt-sync')();
const day_RS = 50.25, irrf_tax = 0.1;
let days = parseInt(prompt('Worked days: '));
let salary, gratification, irrf;

salary = days*day_RS;

if(days>10 && days<=20){
    gratification = salary*0.2;
    salary+=gratification;
}
else if(days>20){
    gratification = salary*0.3;
    salary+=gratification;
}

irrf = irrf_tax * salary;
salary -= irrf;

console.log(`Salary: ${salary}`);

