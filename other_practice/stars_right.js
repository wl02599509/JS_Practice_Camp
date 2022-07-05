function star_to_right(stars_num){
    for( let star = 1, space = stars_num; star < stars_num, space > 0; star += 1, space -= 1 ){
        var result = (" ".repeat(space) + "*".repeat(star))
        console.log(result)
    }
}

star_to_right(5)