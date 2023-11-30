let a= 13.123456789;
let b= 2.123;
let n=5;

/*
a = 13,890123;
b = 2,891564;
n = 2;
*/ 

let n1=a%1;
let n2=b%1;

let result1= Math.round(Math.floor(n1* Math.pow(10,n)));
let result2= Math.round(Math.floor(n2* Math.pow(10,n)));

console.log(result1);
console.log(result2);
console.log(result1 > result2);
console.log(result1 < result2);
console.log(result1 >= result2);
console.log(result1 <= result2);
console.log(result1 != result2);
console.log(result1 === result2);