uglyNums = (n)=>{  
    let ugly = [];
    ugly[0] =1;
    let count = 1; 
    let index2 = 0;
    let index3 = 0;
    let index5 = 0;
     
     while (count < n){
         
         let next2 = ugly[index2] * 2;
         let next3 = ugly[index3] * 3;
         let next5 = ugly[index5] * 5;
        
        let nextUglyNo = Math.min(next2, Math.min(next3,next5));
        
        if (nextUglyNo == next2)
        index2++;
        
        if (nextUglyNo == next3)
        index3++;
        
         if (nextUglyNo == next5)
        index5++;
        ugly[count ++] = nextUglyNo;
     }
     return ugly[n-1];
}
console.log(uglyNums(8));