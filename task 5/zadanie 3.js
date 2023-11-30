list=[12,33,3,44,100]

function arrSort(arr){
    for (let i=arr.length-1; i>0; i--){
        for (let j=0; j<i; j++){
            if (arr[j]>arr[j+1]){
                let h=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=h
            }
        }
    }
    return arr
}

let result=arrSort(list)
console.log(result)