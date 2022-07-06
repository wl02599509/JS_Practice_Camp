// console.log('A'.codePointAt())


const chars1 = ["a", "b", "c", "d", "f", "g"] 
const chars2 = ["O","Q","R","S"]

//題目解析：
//1)將引數的陣列元素，全部轉換成unicode
//2)用判斷式確認數字是否連續

function missingChar(chars) {
  const arr = []
  
  for(let i = 0; i < chars.length; i++){
    arr.push(chars[i].codePointAt());
  }
  //將引數的陣列元素透過for迴圈，一個一個轉換成10進位的unicode後，放到新的陣列arr裡
  for(let num = 1 ; num < arr.length; num++){
    if (arr[num] - arr[num - 1] !== 1){
      return String.fromCodePoint((arr[num] + arr[num - 1]) / 2); 
    }
  }
  //接著用for迴圈，讓後一碼減去前一碼，確認數字（字母）是否連續，如果相減的結果不是1，代表沒有連續，那就將相減不等於1的兩個數字相加除二，便得到缺少的數字，最後再將該數字以10進位轉換成字串，便得缺少的字母。
}
console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// https://pjchender.blogspot.com/2018/06/guide-unicode-javascript.html