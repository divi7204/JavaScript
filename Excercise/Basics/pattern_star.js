function star_pattern(rows){

    for(let i=1;i<rows+1;i++){
        let pattern = "";
        for(let j=0;j<i;j++){
            pattern+= "*";
        }
        console.log(pattern);
    }
}

star_pattern(4)
