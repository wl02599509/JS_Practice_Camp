
function myPush(arr, elm) {
  arr.splice((arr.length), 0, elm)
  return arr
}

const data = ["a", "b", "c"]
const result = myPush(data, "x")
console.log(result) // ["a", "b", "c", "x"]

