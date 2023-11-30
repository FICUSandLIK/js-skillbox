let n=0;
let m=100;

/*
n = 2; 
m = 5;
*/ 

let result1=CreateRandom(m,n);
let result2=CreateRandom(m,n);

console.log(result1);
console.log(result2);


function CreateRandom(n,m){
    let range=Math.abs(m-n);
    let min=Math.min(m,n);
    let numberInRange= Math.round(Math.random()*range);

    return numberInRange+min;

}