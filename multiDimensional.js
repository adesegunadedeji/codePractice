
const arr = [[1,0,1,0],[1,1,1,1],[0,0,0,1],[5,2,4,5],[5,2,4,5]];
console.log(arr);


function multiDim(arr){
    for (let i =0; i< arr.length; i++){
        for(j = 0; j<arr[i].length; j++){
            console.log(arr[i][j]);
        }
      console.log(" ")
    }

}

multiDim(arr);