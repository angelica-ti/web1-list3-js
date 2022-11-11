var prompt = require('prompt-sync')();

let hour = parseInt(prompt('Hour: '));
let minutes = parseInt(prompt('Minutes: '));
let seconds = parseInt(prompt('Seconds: '));
const c = 60;
let minutes_to_seconds, hour_to_seconds, total_seconds;

minutes_to_seconds = minutes*c;
hour_to_seconds = hour*c**2;

total_seconds = hour_to_seconds + minutes_to_seconds + seconds;

console.log(`Total of Seconds: ${total_seconds} s`);