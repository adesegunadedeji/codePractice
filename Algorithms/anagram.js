function sherlockAndAnagrams(s) { let anagrams = 0;

    for (let x = 1; x < s.length + 1; x++) {
        const stringMap = {};
    
        for (let y = 0; y < s.length - x + 1; y++) {
            const string = s.substring(y, y + x).split('').sort().join('');
            stringMap[string] = (stringMap[string] || 0) + 1;
        }
    
        Object.values(stringMap).forEach((value) => {
            anagrams += value * (value - 1)/2;
        });
    }
    
    return anagrams;
    }


    console.log(sherlockAndAnagrams("abba"))

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