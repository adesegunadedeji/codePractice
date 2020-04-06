function hourglassSum(arr) {
    // console.log(typeof(arr), "TYPEOF")
    // console.log(arr.length, arr);
    console.log(arr[0].length);
    let hourglass = []

    let rows= arr.length;
    let  columns = arr[0].length;

    if (typeof(arr) === 'object' && arr.length === 6 &&
     arr.map(index => index.length).reduce((a,b)=> a+b) === 36){
    console.log("CONTINUE WITH CODE");


    let maxHourGlass = Number.MIN_VALUE;

    for (let i = 0; i<rows-2; i++) {
        for (let j = 0; j <columns-2; j++){
            let current_HourGlassSum = 0;
            current_HourGlassSum = arr[i][j] + arr[i][j+1]+arr[i][j+2] + arr[i+1][j+1]+ arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
            //console.log(current_HourGlassSum, "HOURGLASS");

            hourglass.push(current_HourGlassSum)
           // maxHourGlass = Math.max(maxHourGlass,current_HourGlassSum)
        }
    }
    if (hourglass.length > 0){
        return Math.max(...hourglass) 
    }
   return 0
    }
}

   
//Methd 2:
// function hourglassSum(arr) {
//     console.log(typeof(arr))
// let hourglass = [];


// //Validate the array is an Object
// //Validate the length of the array equals 6
// //Validate that arr[row][col] = 36
// if (typeof(arr)=== 'object' && arr.length === 6 &&
//  arr.map(i => i.length).reduce((a, b) => a + b) === 36){
//      //Multi Dimensonal Array (2 For Loops)
//      for (let row=0; row <=3; row++){
//          for (let col = 0; col <= 3; col++){
//              let sum = 0;

//              sum += arr[row][col];
//              sum += arr[row][col+1];
//              sum += arr[row][col+2];
//              sum += arr[row + 1][col + 1];
//              sum += arr[row + 2][col];
//              sum += arr[row + 2][col + 1];
//              sum += arr[row+ 2][col + 2];

//              hourglass.push(sum)

//          }
//          // If New Array Hourglass length is Greater than Zero. Return the max value of the array; otherwise the value is Zero (0)
//      }
//     console.log(arr.length)
// }
//  console.log("HOURGLASSS ARRAY",hourglass)
//         //  return (hourglass.length > 0) ? Math.max(...hourglass) : 0;
//         if (hourglass.length > 0){
//             return Math.max(...hourglass) 
//         }
//        return 0
// }
// }

const arr = [[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]]
console.log(hourglassSum(arr));