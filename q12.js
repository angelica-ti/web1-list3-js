let peter_height = 110;
let john_height = 150;
const peter_growth = 3;
const john_growth = 2;

year = 0;

while(peter_height<=john_height){
    peter_height += peter_growth;
    john_height += john_growth;
    year += 1;
}

console.log(`\nIn ${year} years Peter's height will be greater than John's height`);
console.log(`Peter's Height: ${peter_height} cm`)
console.log(`John's Height: ${john_height} cm`)

