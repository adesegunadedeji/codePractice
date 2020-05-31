// catalanNum = (n)=>{
//     let result = 0;
//     //Recursive Method:
//     if (n <= 1)
//     return 1;
    
//     for(let i = 0; i< n; i++){
//         result+= catalanNum(i) * catalanNum(n-1-i);
//     }
//     return result;
// }
// console.log(catalanNum(5))


catNum = (n)=>{
    let catArr = [];
    catArr[0]=1;
    catArr[1]=1;
    
    for(let i = 2; i<=n ; i++){
        catArr[i] = 0;
       for(let j = 0; j < i; j++){
           catArr[i]+= catArr[j] *catArr[i-j-1];
       }
    }
    return catArr[n];
}

console.log(catNum(4));