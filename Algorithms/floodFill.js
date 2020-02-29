// var floodFill = function(image, sr, sc, newColor) {

//     const color = image[sr][sc]
//     //console.log(color)
//     if (color === newColor){
//         return image;
//     }

  
   

//     var fillRecursive = function(image, i, j, color, newColor) {

//         if (i < 0 || i>= image.length || j < 0 || j>= image[i].length || image[i][j] !== color){
//             return;
//         }
//         image[i][j] = newColor;
//         fillRecursive(image, i+1, j, color, newColor)
//         fillRecursive(image, i-1, j, color, newColor)
//         fillRecursive(image, i, j+1, color, newColor)
//         fillRecursive(image,i, j-1, color, newColor)
//     }


//     fillRecursive(image, sr,sc, color, newColor);
//     return image

// };

// let testArr = [[1,1,1], [1,1,0],[1,0,1]]
// console.log(testArr)
// console.log(floodFill(testArr,1,1,3))

