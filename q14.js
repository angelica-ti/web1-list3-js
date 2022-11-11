const N = 20;
let fibonacci;
let fibonacci1 = 1; 
let fibonacci2 = 1; 

for(let i=2; i<N; i++){
    fibonacci = fibonacci1+fibonacci2;
    console.log(fibonacci)
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacci;
}