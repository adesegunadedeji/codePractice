
let queries = [[1,2,100], [2, 5,100],[3,4,100]]
function arrayManipulation(n, queries) {
    let outputArr = [];
    outputArr.length = n+2;
    for (let i= 0; i < queries.length;i++){
        let a = queries[i][0];
        let b = queries[i][1];
        let k = queries[i][2];
        outputArr[a] +=k;
        outputArr[b+1] -= k;
}
console.log(outputArr)
return  getMax(outputArr);
}

function getMax(arr){
    let max = Number.MIN_VALUE;
    let sum =0;
    for (let i =0; i<arr.length;i++){
        sum+= arr[i];
        max = Math.max(max,sum)
    }
    return max;
}
let n = 5;

console.log(arrayManipulation(n,queries));