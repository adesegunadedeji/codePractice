// function fibonnaci(n){
//   if (n === 0)
//     return 0;
  
//   if(n === 1 || n === 2)
//   return 1;

//   return fibonnaci(n-1) + fibonnaci(n-2);

// }

// function fibonnaci(n){
//   if (n<=1)
//     return n;
//   return fibonnaci(n-1) + fibonnaci(n-2);
// }

// console.log(fibonnaci(40));


//Memoization
// var fibonacci = (function() {
//   //Memoization Technique
//   let lookup = [];

//   function f(n) {
//     var value;
//     if (n in lookup) {
//       value = lookup[n];
//     } 
//     else {
//       if (n <= 1)
//         value = n;
//       else
//         value = f(n - 1) + f(n - 2);
//       lookup[n] = value;
//     }
//     return value;
//   }

//   return f;
// })();
// console.log(fibonacci(40));


//Tabulation Technique

// function fibonacciTest(n){
//   f= [];
//   f[0]= 0;
//   f[1] = 1;
// //   f[2] =1;

//   for(let i = 2; i <= n; i++){
//     f[i] = result = f[i-1] + f[i-2];
//   }

// return f[n] ;
// }

//  console.log(fibonacciTest(40));