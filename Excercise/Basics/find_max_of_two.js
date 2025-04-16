let numberOne = 6;
let numberTwo = 8;

if (numberOne > numberTwo)
    console.log(numberOne + " is greater than " + numberTwo)
else {
    console.log(numberOne + " is lesser than " + numberTwo)   
}



//you can use the funtion as well

function calculate_max(numberOne , numberTwo){
    value = numberOne + " is lesser than " + numberTwo
    if (numberOne > numberTwo)
        value = numberOne + " is greater than " + numberTwo
    return value
}

console.log(calculate_max(6,8))
