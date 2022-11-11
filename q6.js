var prompt = require('prompt-sync')();

let worked_hours = prompt('Enter with hh:mm:ss = ').split(':');
let hh = parseInt(worked_hours[0]);
let mm = parseInt(worked_hours[1]);
let ss = parseInt(worked_hours[2]);

const class_hour = 50; INSS_per = 0.09;

let gross_salary = class_hour * (hh + mm/60 + ss/3600);
let net_salary = gross_salary - gross_salary * INSS_per;

console.log(`\nGross Salary: R$ ${gross_salary.toFixed(2)}\nNet Salary: R$ ${net_salary.toFixed(2)}`)