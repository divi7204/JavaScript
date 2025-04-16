function checkTruthy(input_array){
    const truthyValues = input_array.filter(Boolean);
    truthyValues.forEach(value => console.log(value));
}

console.log(checkTruthy([1,'',"",undefined,1000,"string"]))
