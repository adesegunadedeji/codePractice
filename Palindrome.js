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