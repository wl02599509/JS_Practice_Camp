function exist(arr, elm) {
    return (arr.indexOf(elm) >= 0) 
  }
  
  const list = ["a", "b", "c", "d", "e"]
  console.log(exist(list, "c"));  // true
  console.log(exist(list, "z"));  // false