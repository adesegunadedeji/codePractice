
// function sort(string){
//     return string.split("").sort().toString()
// }

// const permutationChecker = (str, str2)=>{
//     let sort1 = sort(str);
//     let sort2 = sort(str2);
//     console.log(sort2)
//     console.log(sort1)
//     //Check to make sure Lengths of String Equal. and tht boths string are not null
//     if (!str || !str2|| str.length !== str2.length){
//         return false;
//     }
//     if (sort1===sort2){
//          return true;
//       }
//       else return false
// }


let string1= "abcd"
let string2= "dbac"
// console.log(permutationChecker(string1,string2), "RESULT1")

function isPermutation(strA, strB){

	//First validity check
	if (!strA || !strB || strA.length !== strB.length){
		return false;
	}
	//Get the map of characters and their occurences in strA
	var charsMap = getMap(strA);
	// var charsMap2 = getMap(strB);
	// console.log(charsMap)
	// console.log(charsMap2)
	
	//Check strB characters and occurences on the computed map.
	for (var i = 0; i < strB.length; i++){
		var charB = strB[i];
		//console.log(charsMap[charB], "charsMAPCHARB")
		
		if (charsMap[charB] !== undefined && charsMap[charB] >= 1){
			charsMap[charB]--; 
			// If current character does appear in A and B, decrement the occurence counter.
		}
		else{
			return false;
		}
	}
	
	return true;
}

function getMap(str){
	var map = {};
	
	for (var i = 0; i < str.length; i++){
		var currChar = str[i];
		
		//If current character hasn't been mapped, map it
		if (map[currChar] === undefined){
			map[currChar] = 1;
		}
		else{
			map[currChar]++; //Else increment the occurrence counter.
		}
	}
	
	return map;
}

console.log(isPermutation(string1, string2))