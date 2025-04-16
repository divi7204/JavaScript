//let's follow the function approach itself

function is_LandScape(width, height){
if (width>height)
    return "Landscape";
else{
    return "Portrait";
}
}

console.log(is_LandScape(8,6))
console.log(is_LandScape(6,8))
