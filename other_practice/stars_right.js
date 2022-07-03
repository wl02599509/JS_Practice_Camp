function tree(stars){
    for( let star = 1, hole = stars; star < stars, hole > 0; star += 1, hole -= 1 ){
        var body = (" ".repeat(hole) + "*".repeat(star))
        console.log(body)
    }
}

tree(5)