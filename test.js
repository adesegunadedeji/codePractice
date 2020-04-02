// function lengthEachScene(inputList)
// {
//     const storage = {}
//     let count = 0;
    
//     for (const element of inputList){
//         console.log(element, "elements")
//         storage[element] = (storage[element]||0) + 1;
//         console.log(storage)
//         if (storage[element] === 1){
//             return 1;
//         }
        
//         else if (storage[element]> 1){
          
//            console.log(storage[element].length);
            
//         }
//     }
//     return "test";
    
//    //console.log(inputList)
//     // WRITE YOUR CODE HERE
// }


function lengthEachScene(inputList)
{
    let arr = []
   let storage = {}// Create Hashmap
    let count = 0; //Intialize Counter

    //Loop through the array
    for (const element of inputList){ 
       //if it exist store else COunt it as 1. 
        storage[element] = (storage[element]||0) + 1;
        
        if (storage[element] == 1){
           return storage;
        }
        if (storage[element] > 1){
            storage[element]++;
            count++;
        }
    }
//console.log(storage, "STORAGE AND COUNT")
    return arr.push(storage);
}

console.log(lengthEachScene(['a','b','c']));
