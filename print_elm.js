// const list = ["a", "b", "c", "d", "e"]

// for (let order = 0; order <= list.length; order++){
//     console.log(list[order]);
// }

// const list = [1, 2, 3, 4, 5]

// list.forEach (function(elm) {
//     console.log(elm * 2)
// })

// const list = [1, 2, 3, 4, 5]

// let result = list.find (function(elm){
//     return elm > 3
// })

// console.log(result)


// const list = [1, 2, 3, 4, 5];
// var result = [];
// for (let i = 0; i < list.length; i++) {
//     result.push(list[i] * 2);
// }
// console.log(result);

// const list = [1, 2, 3, 4, 5];
// const new_one = list.map (function(i){
//     return i * 2
// })

// console.log(new_one)


// function double(arr) {
//     return arr.map (function(i){
//         return i * 2
//     })
// }
  
// const list = [1, 2, 3, 4, 5]
// const result = double(list)
// console.log(result); // [2, 4, 6, 8, 10]

// const list = [1, 2, 3, 4, 5]

// list.filter(function(x){
//     return x % 2 == 1
// })


// const list = [1, 2, 3, 4, 5]

// const total = list.reduce(function(acc, cv){
//     return acc + cv
// })

// console.log(total)

const list = [1, 4, 3, 9, 2, 6, 7, 8]

const total = list.reduce(function (a, b) {
  if (b > a) {
    return b
  } else {
    return a
  }
})
console.log(total)


