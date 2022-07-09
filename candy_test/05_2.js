// 編號：005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起
// 範例：

function squareDigits(num){
   return num.toString().split('').map((elm) => Math.pow(Number(elm), 2)).join('')
   //將引數變成一個字串，然後在用 split，把該字串內的字元一個個拆開成個別的字串，在用 map，將一個個字串變回數字後用 Math.pow 進行平方，最後把 map 的回傳值（一個陣列內涵一個個平方後的數字）用 .join 合併起來。
   
}

console.log(squareDigits(3212));  // 印出 9414
console.log(squareDigits(2112));  // 印出 4114
console.log(squareDigits(387));   // 印出 96449


