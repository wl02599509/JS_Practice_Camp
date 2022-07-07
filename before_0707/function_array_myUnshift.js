function myUnshift(arr, elm) {
    arr.splice(0, 0, elm)
    return arr
}
  

  const data = ["a", "b", "c"]
  const result = myUnshift(data, "x")
  console.log(result) // ["x", "a", "b", "c"]