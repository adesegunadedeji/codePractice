
/*Given an integer n and an array a of length n, your task is to apply the following mutation to a:

Array a mutates into a new array b of length n. 
For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
 If some element in the sum a[i - 1] + a[i] + a[i + 1]
 does not exist, it should be set to 0.
  For example, b[0] should be equal to 0 + a[0] + a[1]. */
 let array_A = [4,0,1,-2,3];
 let n = 5;
 console.log(array_A, "INITIAL ARRAY");
 mutateArray=(arr, n)=>{

    let b = [];
     for (let i =0; i < n; i++){
         let firstTerm = arr[i-1];
         let secondTerm = arr[i];
         let thirdTerm = arr[i+1];
         if (i-1 < 0){
             firstTerm = 0;
         }
         else {firstTerm = arr[i-1]}
         if (i+1 >= n){
             thirdTerm = 0;
         }
         else {thirdTerm = arr[i+1]}
         b[i] = firstTerm + secondTerm + thirdTerm;
     }
     return b;
 }

 console.log(mutateArray(array_A, n));