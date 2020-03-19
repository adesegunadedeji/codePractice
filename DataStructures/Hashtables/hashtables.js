// function hash(key, arr) {
//     return key % arr;
// }

// hashfunction = (key, arr)=>{
//     return key % arr;
// }
// //2204, 0609, 5604, 3305 9909

// console.log(hash(2204,10)),
// console.log(hash(5604,10))
// console.log(hash(3305,10))
// console.log(hash(9909,10))
// let arr = [0,0,0,8,0,0,0,0]

// findMax =(arr)=>{
//     let highestMount = 0;

//     let max = 0;
//     for (let i =0; i< arr.length;i++){
//         highestMount = i;
//         if (arr[i]> max){
//             max = arr[i];

           
//         }
//         console.log(highestMount, "arr");
//     }
//     return max;
  
// }

// console.log(findMax(arr));


var person = {
    name: 'Ade',
    test: 529,
    Country: 'Nigeria'
}


findName = (arr)=>{
    // for (let i=0; i <arr.length; i++){
    //     console.log(arr.person[name])
        
    // }
    return `Hello - ${arr.name}`;
}
console.log(findName(person));