function checkPalindrome(inputString) {
   // console.log(inputString.length)
for(let i = 0; i < inputString.length; i++){
    if(inputString[i] !== inputString[inputString.length-1-i]) {
        return false
    }
 
}
return true
}

console.log(checkPalindrome("aabaa"))


/*Write a function or functions that returns the index of the letter removed from string (
    in order to make it a palindrome and -1 is it not possible or no string is removed */

// Complete the palindromeIndex function below.
function palindromeIndex(s) {
    let result = -1;
    let stringLength = s.length;
  
    if (1 <= stringLength && stringLength <= 100005 &&
     s !== s.split('').reverse().join('')){
           //Continue Code
         for(let i =0; i< stringLength; i++){
             //Comparison through String for characters from first with the last 
             if (s.charAt(i) !== s.charAt(stringLength-i-1)){
                 let s1 = s.substring(0,i)+ s.substring(i+1);
                 let s2 = s.substring(0, (stringLength - 1 - i)) + s.substring((stringLength - 1 - i) + 1);
                 if (s1 === s1.split('').reverse().join('')){
                     result = i;
                 }
                 else if ( s2 === s2.split('').reverse().join('')){
                     result = stringLength-i-1;
                 }
                 break;
             }
  
         }
      
  
  }
    return result;
  
  }

console.log(palindromeIndex("abbca"))