// function sherlockAndAnagrams(s) { let anagrams = 0;

//     for (let x = 1; x < s.length + 1; x++) {
//         const stringMap = {};
    
//         for (let y = 0; y < s.length - x + 1; y++) {
//             const string = s.substring(y, y + x).split('').sort().join('');
//             stringMap[string] = (stringMap[string] || 0) + 1;
//         }
    
//         Object.values(stringMap).forEach((value) => {
//             anagrams += value * (value - 1)/2;
//         });
//     }
    
//     return anagrams;
//     }
//     console.log(sherlockAndAnagrams("abba"))

// function getAllSubstrings(str) {
//     let i, j, result = [];
//     console.log(str.length)
  
//     for (i = 0; i < str.length; i++) {
//       for (j = i + 1; j <= str.length; j++) {
//         result.push(str.slice(i, j))
//       }
//     }
//     return result
//   }

// let string = "abba"
//   console.log(getAllSubstrings(string))

// function anagramHacker(s){
//     let result =1 , s1, s2;
//         //Continue with Code
//         if (s.length % 2 == 0){
//             s1 = s.substring(s, s.length/2);
//             console.log(s1);
//             s2 = s.substring(s.length/2)
//             console.log(s2);

//             for (let i =0; i <s1.length; i++){
//                 //Check to make sure character is present in h2;
//                 if (s2.indexOf(s1[i]) !== -1){
//                     s2 = s2.replace(s1[i], '')
//                 }
//                 return s2.length;
//             }
//         }
//         else{
//             return result;
//         }
// }

// anagramHacker('abccde');

// function anagram(s) {
//     let result = -1 
//         //Continue with Code
//         if (s.length % 2 != 0){
//          return result;
//         }

//         //Divide the input string into two halves.
//            let s1 = s.substring(s, s.length/2);
//             console.log(s1);
//            let s2 = s.substring(s.length/2)
//             console.log(s2);

//             for (let i =0; i <s1.length; i++){
//                 //Check to make sure character is present in h2;
//                 //Count all common character in the halves.
//                 //The result is length of the second half after deletions.

//                 if (s2.indexOf[s1[i]] !== -1){
//                     //replace exisiting character with space
//                     s2 = s2.replace(s1[i], '')
//                 }
    
//             }
//             return s2.length;
// }

// console.log(anagramHacker("aaabbb"))


function makeAnagram(a, b){
    const larger = a.length >= b.length ? a : b //Base Case
    const smaller = a.length < b.length ? a : b
   
   console.log(larger, "LARGER")
    //Create hash map; 
    const storage = {}; //Empty Object to store variage. 
   
    //For loop to check elements of larger string // and to store characeter counts in the obj
    for (const element of larger){
        storage[element] = (storage[element] || 0)+1;
        console.log(storage[element], "element");
    }
   
    //Intialize the count
    let counter = 0;
   
    for (const element of smaller){
        if (storage[element] && storage[element]>0){
            storage[element]--; //Reduce Storage of Element COunt if its exist 
            counter++; //And Increment Counter based on how many times it does exits
        }
    }
    console.log(counter, "COUNTER")
   
    //ALgotithm Pieces
    let small_Diff = (smaller.length - counter);
    console.log(small_Diff, "SMALL DIFF")
     let large_Diff =(larger.length - smaller.length);
    console.log(large_Diff, "LARGEDIFF")
    return (2*small_Diff)+ large_Diff;
   }
   

   console.log(makeAnagram("abcsd", "abcd"))

   


