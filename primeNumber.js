primeNumber=(num)=>{
//Base Case
    if (num <= 1){
        return false;
    }
    for (let i = 2; i<num; i++){
        if(num % i == 0){
            return false
        }
    }
    return true
}

console.log(primeNumber(3));

primeNumberOptimal= function(num){
    if (num <= 1){
        return false;
    }
    if (num<=3){
        return true;
    }

    if (num % 2 == 0 ||num % 3 == 0 ){
        return false;
    }

}