
let queries = [[1,2,100], [2, 5,100],[3,4,100]];

// let queries = [[1,5,3], [4,8,7],[6,9,1]]

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let max = Number.MIN_VALUE;
let params = [];
for (let i =0; i< queries.length; i++){
  const query = queries[i];
   const qstart = query[0];
   const qend = query[1];
   const qval = query[2];

        params.push({
            key: qstart,
            val: qval
        });
        
        params.push({
            key: qend,
            val: -qval
        });
}

console.log(params.sort(), "SORRT PARAMS");
  //sort the parameters by key
    params.sort((item1, item2) => {
        if(item1.key === item2. key){
            //return item2.val - item1.val;
            console.log(item1.val, "ITEM1.VALUE")
            //return item1.val;
        }
        console.log(item2.key, "ITEM2.VALUE")
        
        //return item2.key;
         //     return item1.key - item2.key;
    });
    
    let sum = 0;
     for(let i=0; i<params.length; i++){
        const param = params[i];
        sum += param.val;
        
        if(sum > max){
            max = sum;
        }
    }

    return max;

}

 let n = 5;

 console.log(arrayManipulation(n,queries));
 console.log(100*(100-100)*(100-100)-100)
 console.log(3*(7 -3)*(1 -7)-1)

