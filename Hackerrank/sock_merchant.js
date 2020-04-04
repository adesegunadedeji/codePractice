function sockMerchant(n, ar) {
    //console.log(ar)
    const hash ={}; //Create an Empty Object
    let pair = 0;

    for(const element of ar){ 
        //Store the number of occurenaces within the hash.
        hash[element] = (hash[element] || 0)+1;
    }

   Object.keys(hash).forEach( index =>{
       console.log(hash);
       console.log(hash[index], "HashINdex");
       let _pair = parseInt(hash[index]/ 2);
       //console.log(_pair)
       if ( _pair >=1){
           pair+= _pair;
       }
   })
   return pair;
}

console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30 ,50, 10 ,20]))