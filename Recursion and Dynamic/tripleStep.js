function tripleStep(n){

    if (n ==1 || n ==0)
        return 1;
  
    else if (n == 2)
        return 2;

    return tripleStep(n-3)+tripleStep(n-2)+tripleStep(n-1);
}
//Exponential Time Complexity

//console.log(tripleStep(5));
//Memoization: Create Array and Store values of Zero

let memotripleStep =(function(){

    var obj = {} //Empty object

    function tripleStep(n){
        if (n in obj){
            return obj[n];

        }
        else if (n ==1 || n ==0){
            return 1;
        }
        else if (n ==2){
           return 2;
        }
        
        else{
            obj[n] = tripleStep(n-3)+tripleStep(n-2)+tripleStep(n-1);
        }
        return obj[n]
    }
    return tripleStep;

}
)();

//console.log(tripleStep(50));
console.log(memotripleStep(7));