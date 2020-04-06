
let arr=[1,2,3,4,5]
let newIndex;
let n = 5;
let newArr = [];
function leftRotation(n, d){

    for(let i = 0; i< n; i++){
        newIndex = (i+d)%n;
        console.log(newIndex)
        newArr[i] = arr[newIndex]
    }
   
    return newArr
}
let d = 4;
console.log(leftRotation(n, d));