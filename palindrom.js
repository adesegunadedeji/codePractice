function palindrome (str){
    if (str.length == null){
        return false;
    }
    for (let i=0; i< str.length; i++){
        if (str[i] !== str[str.length-1 -i]){
            return false;
        }

    }
    return true;
}

console.log(palindrome("aabaa"))