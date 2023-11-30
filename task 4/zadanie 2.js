let mas=[];
let count=8;


for (let i=1; i<=count;i++){
    mas.push(i);
}
console.log('старый массив- ' + mas);

for (let i=0; i<count; i++){
    let rand= Math.floor(Math.random()* count);
    let temp=mas[i];
    mas[i]=mas[rand];
    mas[rand]=temp;
    
}
console.log('новый массив- ' + mas);