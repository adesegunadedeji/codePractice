


function prefixSum(arr){
    for(let i = 1; i<arr.length; i++){
    arr[i] = arr[i]+arr[i-1]
    }
    return arr[arr.length-1];

}

function Sum(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum +=arr[i];
    // arr[i] = arr[i]+arr[i+1]
    }
  //console.log(sum, "SUM");
  return sum;

}
let arr = [1,2,3,4,5]
console.log(prefixSum(arr));
//console.log(Sum(arr));