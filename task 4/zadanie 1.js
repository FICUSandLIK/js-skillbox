let 
list =[];

n=0;
m=100;
let min= Math.min(n, m);
let max= Math.max(n, m);
count=100;

for (let i=0; i<count; i++){
    list.push(Math.round(Math.random()*(m-n))+n);
}

console.log(list);