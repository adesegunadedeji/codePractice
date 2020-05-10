startupName = (arr)=>{
   return arr.map(element=>element[0].toUpperCase()).sort().join(" ");
}

arrName= ["Adesegun", "James", "Ron", "Bill"];
console.log(startupName(arrName));