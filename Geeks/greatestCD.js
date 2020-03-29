

let num = 10;
let num2 = 20;
// function greatestCommonDenominator(num, num2){

//     if (num = 0)
//         return num2;
//         return greatestCommonDenominator(num2 % num, num)
// }

function greatestCommonDenominator(a, b) {
    if(b === 0) {
        return a;
    }

    return greatestCommonDenominator(b, a%b);
}

console.log(greatestCommonDenominator(num, num2))

// function gcd(a,b) 
// { 
//     if (a == 0) 
//         return b; 
//     return gcd(b % a, a); 
// } 


// console.log(gcd(num,num2), "Second")
