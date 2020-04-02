function power(x,n){
    //Base Case: 
    let answer;
    if (n == 0)
        return 1;
        //Even Condition
        else if (n % 2 ==0){
            answer = power(x, n/2)
            return answer*answer;
        }
        //Odd Condition
        else{
            answer = x* power(x, n-1)
            return answer;
        }
}

console.log(power(3,3));