function countingValleys(n, s) {
    let count = 0;
    let alt = 0;
       for (let i = 0; i< s.length; i++){
   
           if (s.charAt(i) == 'U'){
               alt++;
       if (alt ==0){
           console.log("Counter")
           count++;
       }
   }
   else {
       alt--;
   }
   }
   return count;
   }

   const s="UUUDDDUDDUU";
   n =11;
   console.log(countingValleys(n, s))

