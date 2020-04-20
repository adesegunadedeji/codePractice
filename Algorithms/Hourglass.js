/* Write a funcion that returns the largest summed number ofall the HourGlass Patterns 
in an array */


//Complete the hourglassSum function below.
function hourglassSum(arr) {
    let hourglass = [];
    
    //Validate the array is an Object
    //Validate the length of the array equals 6
    //Validate that arr[row][col] = 36
    if (typeof(arr)=== 'object' && arr.length === 6 &&
     arr.map(i => i.length).reduce((a, b) => a + b) === 36){
         //Multi Dimensonal Array (2 For Loops)
         for (let row=0; row <=3; row++){
             for (let col = 0; col <= 3; col++){
                 let sum = 0;
                 sum += arr[row][col];
                 sum += arr[row][col+1];
                 sum += arr[row][col+2];
                 sum += arr[row + 1][col + 1];
                 sum += arr[row + 2][col];
                 sum += arr[row + 2][col + 1];
                 sum += arr[row+ 2][col + 2];
    
                 hourglass.push(sum)
    
             }
         }
        console.log("ARRAY IS AN OBJECT");
        console.log(arr.length)
    }
     console.log("HOURGLASSS ARRAY",hourglass)
     /* If New Array Hourglass length is Greater than Zero. 
     Return the max value of the array; otherwise the value is Zero (0)*/
             return (hourglass.length > 0) ? Math.max(...hourglass) : 0;
             /*if (hourglass.length > 0){
                return Math.max(...hourglass) 
            }
           return 0 */
    }
