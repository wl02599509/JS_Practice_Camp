// const a = [1, 2, 4, 6]
// const b = [3, 7 ,9]

// const c = [...a, ...b]
// console.log(c);



const list = [3, 6, 9]

let a = list[0]
let b = list[1]
let c = list[2]

let [a, b, c] = list //解構，但陣列有順序性。
console.log(b)