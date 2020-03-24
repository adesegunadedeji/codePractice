var sum = 0;
const arr = [1,1,2]
var obj = {prop1: 5, prop2: 13, prop3: 8};

arr.forEach(element => {

    console.log(element);
    
});



const object = {name: "John Doe", country: "USA", age: 15};

for (const prop in object){
    console.log(`Hello ${object[prop]}`);
    console.log(`Hello ${prop}`);
}
