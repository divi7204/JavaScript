function sum(limit){
    let sum_value = 0;
    for(let i=0; i<=10;i++){
        if (i%3 === 0 | i%5===0){
            sum_value+= i;
        } 
    }
    return sum_value
}


console.log(sum(10))
