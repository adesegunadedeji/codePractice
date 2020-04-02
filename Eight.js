// let cells = [1,1,1,0,1,1,1,1];


// let numOfDays = 2;

// let changeState = (cellarr)=> cellarr.map((cur, idx, arr)=> (arr[idx-1] ||0) + (arr[idx+1] || 0)===1?1:0);

// let newCells =cells;
// for (let i = 0 ; i <numOfDays; i++) newCells = changeState(newCells);


// console.log(newCells);


function cellCompete(states, days)
{
    // WRITE YOUR CODE HERE 
  for (let i = 0; i< days; i++) {
      
      
      let dayResult = [];
      states.forEach((cellState, index)=>{
          let leftVal = (index == 0) ? 0 : grid [index -1] ;
          let rightVal = (index == grid.length -1)? 0: grid[index+1];
          
          dayResult[index] = (leftVal==rightVal)? 0: 1;
          console.log(dayResult);
          
          //if (index = 0) {
            //   left val = 0 else
        //       left val = state [index-1]
        //   }
      });
      states = dayResult;
  
  }
   return states;
}
// FUNCTION SIGNATURE ENDS



cellCompete(5, days);