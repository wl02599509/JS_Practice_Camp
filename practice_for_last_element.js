function last(arr) {
    let last_number = arr[arr.length-1] 
    return last_number
  }
  
  const list = ["a", "b", 2, 0, 1, 2, "c"]
  let lastOne = last(list)
  console.log(lastOne);   // "c"