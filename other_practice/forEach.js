const arr = [100, 10, 1]
const arr2 = []
arr.forEach(function(elm){
    return arr2.push(elm * 2)
})

console.log(arr2)