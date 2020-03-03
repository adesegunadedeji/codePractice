/* Is Unique: Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures. */

//(Without Addition data Structures)
const isUnique = (str)=>{
for (let i= 0; i < str.length; i++){
    for (let j = i+ 1; j < str.length; j++){
        if (str[i]=== str[j]){
            return false
        }
    }
}
return true
}

/* More Efficient Solution According to Cracking the code: 

STEPS
1. Is the String an ASCII String or Unicode String: 
Let's Assume its ASCII
2. Create an array of Booleans where the flag at index (i)indicates whether 
the character (i) in the alphabet is contained in the string. 
The next time the character shows up return false
*/

const isUnique2 =(str)=>{
    //ASCII Limit: If its greater than the set limit of ASCII Characters return false
    if (str.length > 128){
        return false;
    }
    var booleanArr = [];

    for (let i =0; i< str.length; i++){
        let value = str[i]
        //console.log(value)
        //Check to see if the any character exist the second time, Return False if it does
        if (booleanArr[value]){
            console.log(booleanArr[value],value, "test")
            return false;
        }
        booleanArr[value] = true
        //console.log(booleanArr[value], "test")
    }
    return true;

}


const string = "ABCD"
// var str = "HELLO WORLD";
// var res = str.charAt(str.length-1);
// console.log(res, str.length-1)

console.log(isUnique(string))
console.log(isUnique2(string))