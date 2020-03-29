// fibonacci= (n)=> {
//     if (n==0){
//         return 0;
//     }
//     if (n==1){
//         return 1;
//     }
//     return fibonacci(n-1)+ fibonacci(n-2);
// }

// console.log(fibonacci(6));

//Memoization
var fibonacci = (function() {
    var memo = {};
  
    function f(n) {
      var value;
  
      if (n in memo) {
        value = memo[n];
      } 
      
      else {
        if (n <= 1)
          value = n;
        else
          value = f(n - 1) + f(n - 2);
  
        memo[n] = value;
      }
  
      return value;
    }
  
    return f;
  })();

  var memoFib = ( function() {
    let memo = {}
     function fib(n) {
      if (n in memo) { 
          return memo[n]
        }
      else { 
        if (n <= 1) { 
            memo[n] = n 
        } 
        else { memo[n] = fib(n - 1) + fib(n - 2) } 
        
      }
      return memo[n]
    }
    return fib;
   })();

console.log(fibonacci(50));

console.log(memoFib(50));