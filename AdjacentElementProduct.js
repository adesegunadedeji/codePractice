const arr = [3, 6, -2, -5, 7, 3]

// Given an array of integers, find the pair of adjacent 
//elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// function adjacentElementsProduct(inputArray) {

//     var x = 0;
//     var y= 0;
//     var product = Number.MIN_SAFE_INTEGER;

// for (let i= 0; i <=inputArray.length; i++){
//     x= inputArray[i]
//     y= inputArray[i+1];
//     if (x*y >product){
//         product = x*y;
//     }

// }
// return product
// }

function adjacentElementsProduct(inputArray, test, val) {

    var x = 0;
    var y= 0;
    var Initialproduct = inputArray[0]*inputArray[1]

for (let i= 0; i <=inputArray.length; i++){
    x= inputArray[i]
    y= inputArray[i+1];
    if (x*y >Initialproduct){
        Initialproduct = x*y;
    }

}
return Initialproduct
}

console.log(adjacentElementsProduct(arr))


let cat = [1,2,3]
let a = [1]
a = [...cat,a]
console.log(a)
