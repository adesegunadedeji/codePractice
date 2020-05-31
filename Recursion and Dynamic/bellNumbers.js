bellNumbers = (n)=>{
    
    let bellArr = [[],[]];
    
    bellArr[0][0] = 1;
for(let i = 1; i <= n; i++){

    //if j == 0 : First Index of Column
    bellArr[i][0] = bellArr[i-1][i-1];
    //Else: 
    for(let j = 1; j <=i; j++)
    bellArr[i][j] = bellArr[i-1][j-1]+ bellArr[i][j-1];
}
 return bellArr[n][0] ;
}

console.log(bellNumbers(3));