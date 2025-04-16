

function fizzBuzz(input){
    if (typeof(input)!== "number")
        return "Not a number"
    else if (input%3 && input%5 === 0)
        return "FIZZBUZZ";
    else if (input%3 === 0)
        return "FIZZ";
    else if (input%5 === 0)
        return "BUZZ";
    else
        return input
}

console.log(fizzBuzz("6"));
console.log(fizzBuzz(15));
console.log(fizzBuzz(6));
console.log(fizzBuzz(10));
console.log(fizzBuzz(7));
