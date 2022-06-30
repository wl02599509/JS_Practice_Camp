// for( let a = 1; a < 12; a += 2){
//     console.log("*".repeat(a))
// }


function tree(stars){
    for( let a = 1, b = Math.floor(stars / 2); a < stars, b > 0; a += 2, b -= 1 ){
        var body = (" ".repeat(b) + "*".repeat(a))
        console.log(body)
    }
}

tree(9)

