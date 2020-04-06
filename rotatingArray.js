
//Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.

rotatingArray =(arr,d )=>{

    for(let i = 0; i<=arr.length-1; i++){
        newIndex = (i+d)%arr.length
        console.log(newIndex)
        newArr[i] = arr[newIndex]
    }
   
    return newArr
}

console.log(2%7, "Modulus")
console.log(rotatingArray(arr1,2))
