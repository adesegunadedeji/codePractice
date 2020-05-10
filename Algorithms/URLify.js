//str - String
// n is size of String - ignoring ending white spaces

const Urlify = ((str, n)=>{
    let newStr = " ";
    for (let i = 0; i< n; i++){
        if (str[i] === " ")
            newStr += "%20";
        else
        newStr += str[i];

    }
   console.log(newStr);

})("Mr John Smith ", 13);

Urlify