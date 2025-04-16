function calculateGrade(arr){
    let count = 0;
    let sum = 0;
    for(let index in arr){
        sum += arr[index];
        count++;
    }
    let avg = Math.floor(sum/count)
    if(avg<=59){ return "F"}
    else if(avg>=60 && avg<=69){return "D"}
    else if(avg>=70 && avg<=79){return "C"}
    else if(avg>=80 && avg<=89){return "B"}
    else if(avg>=90 && avg<=100){return "A"}
}

console.log(calculateGrade([80,80,50]))
