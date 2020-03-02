/* Is Unique: Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures. */
// const string = "ABCDEFE"

// const isUnique = (str)=>{
// for (let i= 0; i < str.length; i++){
//     for (let j = i+ 1; j < str.length; j++){
//         if (str[i]=== str[j]){
//             return false
//         }

//     }
  
// }
// return true
// }

// console.log(isUnique(string))


let string1= "abcd"
let string2= "dbac"


let sort1 = sort(string1);
let sort2 = sort(string2);




function sort(string){
    return string.split("").sort().toString()
}

const permutationChecker = (str, str2)=>{
    let sort1 = sort(str);
    let sort2 = sort(str2);
    //Check to make sure Lengths of String Equal. and tht boths string are not null
    if (!str || !str2|| str.length !== str2.length){
        return false;
    }
   
       
      else if (sort1===sort2){
         return true;
      }
}

console.log(permutationChecker(string1,string2))