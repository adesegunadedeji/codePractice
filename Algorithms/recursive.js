var factorial = function fac(num){
    if(num ==1 || num == 0){
        return 1;
    }
    return num*fac(num-1)
}

var test = factorial(5)
console.log(test)

//ES6
const factorialTest = (n)=>{
    if (n ==1 || n == 0){
        return 1;
    }
    return n * factorialTest(n-1)
}

var answer = factorialTest(5)
console.log(answer)


//Sum Range of Value N
function sumRange(num) {
    if (num ==1) 
    return 1;

    return num +  sumRange(num -1)
}

console.log(sumRange(3));