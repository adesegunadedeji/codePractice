function generalizedGCD(num, arr)
{
 // Use spread syntax to get minimum of array
 const lowest = Math.min(...arr);

 
    for (let factor = lowest; factor > 1; factor--) {
        let isCommonDivisor = true;

        for (let j = 0; j < num; j++) {
            if (arr[j] % factor !== 0) {
                isCommonDivisor = false;
                break;
            }
        }

        if (isCommonDivisor) {
            return factor;
        }
    }

    return 1;
    
}

let arr = [2,4,6,8,10]
console.log(generalizedGCD(5,arr))

function gcd(a, b) {
    if(b === 0) {
        return a;
    }

    return gcd(b, a%b);
}



function generalizedGCD2(num, arr)
{
    factors = arr[0];

    for ( let i = 1; i < num; i++) {
        factors = gcd(factors, arr[i])
    }

    return factors;
}
console.log(generalizedGCD2(5,arr))