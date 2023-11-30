let array = [2,1,3,7];
let index=-1;
let n=7;

for (let i=0; i<array.length; i++){
    if (n===array[i]){
        index=i;
        console.log("идекс элемента равен" + index);
        break;
    }
    else{
        continue;
    }
}
if (index===-1){
    console.log("элемент не найден");
}