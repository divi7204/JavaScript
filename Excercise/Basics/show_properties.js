function showProperties(obj){
    console.log(obj.name)
    console.log(obj.number)
}

function show_properties(obj){
    for (let key in obj){
        console.log(obj[key])
    }
}

const movie = {
    "name": "movie",
    "number": 23,
    "title":"movie title"
}

showProperties(movie)
show_properties(movie)
