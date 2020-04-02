// function absolute (a, b, size){
//     let diff = 0;
//     console.log("size", size)
//     for (let i=0; i< size; i++){
//         diff = diff + abs(a[i]-b[i]);
//     }
//     return diff;
// }
// let arr1= [1,2,10];
// let arr2 = [20,10,40];
// console.log(absolute(arr1, arr2,3))

//Function that adds the sum of the digits of an integer

// function digitSum(n){
//     n = n.toString();
//     // n = n.split('').map(number=>+number); //Array
//     n = n.split('').reduce((a,b)=>+a + +b); //Array
//     console.log(n, "Array")
//     let sum = 0;
//     for (let i = 0; i<n.length; i++){
//         sum+= n[i];
 
//     }
//     return sum;
  
// }

// console.log(digitSum("133"))
  
// Function to check sum of digit using recursion

function superDigit(n, k) {
    n = n.split("");// Split string to array
    n=n.reduce((a, b) => +a + +b) //Sum Elements in the array
    n = n* k + ""; 

    //COndition Check. If length of n > 1: do recursive check. (n,1) else . Show the first digit
    // console.log(n.charAt(0));
    // return (n.length > 1) ? superDigit(n, 1) : n.charAt(0);
    //same as
    if (n.length> 1){
       return superDigit(n,1)
    }
    else{
        return n.charAt(0)
    }


}
console.log(superDigit('100', 5));