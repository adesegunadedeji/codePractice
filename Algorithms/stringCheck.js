// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let result = "NO";
    const lengthofS1 = s1.length;
    const lengthofS2 = s2.length;
    console.log(lengthofS1,lengthofS2, "Length of S1 and s2")

    if (lengthofS1 >= 1 && lengthofS1 <= 100000 && lengthofS2 >= 1 && lengthofS2 <= 100000){
        let arr = s1.split(''); // Splits the S1 String into an Array
        //The filter() method creates a new array with all 
        //elements that pass the test implemented by the provided function.
          result = (arr.filter(key => s2.indexOf(key) > -1).length > 0) ? "YES" : "NO";
     }
     return result;
}