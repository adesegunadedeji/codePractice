function fizzbuzz(n){
    if (n%15===0){
        console.log("FizzBuzz")
    }
    if (n%3===0){
        console.log("Buzz")
    }
    if (n%5===0){
        console.log("Fizz")
    }
    else{
       console.log(n, "test");
    }

}

fizzbuzz(15)