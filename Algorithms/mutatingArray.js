
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

        firstTerm = i-1 < 0 ? 0: arr[i-1]; 
        thirdTerm = i+1 >= n? 0: arr[i+1];
        b[i] = firstTerm + secondTerm + thirdTerm;
     }
     return b;
 }

 console.log(mutateArray(array_A, n));

// petSlippers = (dogs,cats,chickens)=>{

//     const quartetofSlipper = 4;
//     const subTotalDogs = dogs*quartetofSlipper;
//     const subTotalCats = cats*quartetofSlipper;
//     const subTotalChickens = chickens*quartetofSlipper; //per Slippers/ 
    
//     const totalNumberofSlipper = subTotalDogs + subTotalCats+subTotalChickens;
//     console.log(`The total Number of Slippers is ${totalNumberofSlipper}\n`);
//     console.log(`The subtotal of Dogs ${subTotalDogs}\n`);
//     console.log(`The subtotal of Cats ${subTotalCats}\n`);
    
//     console.log(`The subtotal of Chickens ${subTotalChickens}`);
//     return totalNumberofSlipper;
// }

// console.log(petSlippers(5,5,4));

function countTinyPairs(a, b, k) {
    let count = 0;
    let pair1 = "";
    
if (a.length === b.length){
      for (let x =0; x < a.length; x++){
          for (let y = b.length-1 ; y >= 0;y--){
                  let pair = parseInt((""+a[x]+b[y]));    
                    console.log(pair);  

                    if (pair <= k) 
                        count++;      
       
    }

}return count;
}
return;
}

function concatenationsSum(a) {
    let sum = [];
    let totalsumn = 0;
    for(let i = 0; i< a.length; i++){
        for (let j = a.length-1; j >= 0; j--){

            sum[i] = parseInt(""+a[i]+a[j]);
        }
    }
  for (let y = 0; y<sum.length; y++){
        totalsumn += sum[y];
        //console.log(totalsumn)
    }
    return totalsumn;
}

console.log(concatenationsSum([1,2,3,4]))
