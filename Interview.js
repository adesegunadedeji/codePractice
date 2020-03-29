// car
//rac
//check if either are is null then return false;
//check if the length of both arr !== 

// function angram (string1, string2){

//     let empty = [];
    
//         if(string1 == null || string2 == null)
//         return false;
//         else if (string1.length !== string2.length){
//             return false;
//         }
//         else {
//           string1 = string1.split('');
//           string1 = string1. sort();
//           string1 = string1.join();

//           string2 = string2.split('');
//           string2 = string2. sort();
//           string2 = string2.join();

//           if (string1 === string2){
//               return true;
//           }

//         }
// }


// console.log(angram(string1,string2));

function anagram (str1, str2){

let arrStr = []
let arrStr2 = []
    if (str1 == null || str2 == null)
    return false;
    if (str1.length !== str2.length)
    return false;
    else {

  
    for(let i = 0; i< str1.length; i++){
        for(let j = 0; j< str2.length; j++)  {

       arrStr[i] = str1.charAt(i);
       arrStr2[j] = str2.charAt(j);

        }
    }
    arrStr = arrStr.sort();
    arrStr = arrStr.join();
    arrStr2 = arrStr2.sort();
    arrStr2 = arrStr2.join();
  return (arrStr === arrStr2);
}

}
let string1 = "acr"
let string2 = "car";

console.log(anagram(string1, string2))

