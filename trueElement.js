let array1 =[1,2,3,4,4]

trueElement = (arr)=>{
    let num = 0;
    for (let i=0; i< arr.length; i++){
        if (arr[i]>num){
            num = arr[i]
        }
    }
    return true
}

console.log(trueElement(array1))
;