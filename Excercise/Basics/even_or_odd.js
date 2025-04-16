function evenOrOdd(input_number){
    if (typeof(input_number)!== "number")
        return NaN;
    else
        return (input_number%2 === 0)? "even": "odd" ;
}

console.log(evenOrOdd("8"))
console.log(evenOrOdd(1))
console.log(evenOrOdd(10))
