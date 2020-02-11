let array2 = [10,23,45,4];
function maxNumber(array) {
   let max = 0;
   array.forEach((number)=>{
       if(number > max) {
           max = number;
       };
   })
   return max;
}
let maxNum = maxNumber(array2);
console.log(maxNum);


function findMax(arr){
    let max = 0;
    for (let i = 0; i< arr.length;i++){
        if (arr[i]> max){
            max = arr[i]
        };
    }
    return max;
}
console.log("FINDMAX",findMax([10,8,6,30]))