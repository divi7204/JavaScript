function demeritPoints(input_speed){
    let points = 0;
    const speed =70;
    if (input_speed === speed)
        return "ok"
    else{
        points = Math.floor((input_speed-speed)/5)
        if (points === 0)
            return "ok"
        if (points >= 12)
            return "Licence Suspended"
        else
            return points
    }

}


console.log(demeritPoints(70))
console.log(demeritPoints(72))
console.log(demeritPoints(78))
console.log(demeritPoints(180))
