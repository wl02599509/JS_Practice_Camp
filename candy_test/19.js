// 編號：CANDY-019
// 程式語言：JavaScript
// 題目：檢查是否為某個數字的平方數

function isSquare(num) {
  return Math.floor(Math.sqrt(num)) === Math.sqrt(num)
  //判斷引數的平方根取最大整數如果不等於其平方根，那代表該數並非平方數。
}

console.log(isSquare(0)) // true
console.log(isSquare(4)) // true
console.log(isSquare(5)) // false
console.log(isSquare(100)) // true
console.log(isSquare(-4)) // false
console.log(isSquare(-1)) // false