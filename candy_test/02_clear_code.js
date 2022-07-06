const chars1 = ["a", "b", "c", "d", "f", "g"] 
const chars2 = ["O","Q","R","S"]

function missingChar(chars) {
  for(let i = 0; i < chars.length - 1; i++){
    const num_2 = chars[i+1].codePointAt();
    const num_1 = chars[i].codePointAt();
    // 先用for迴圈，將chars傳進來的陣列，每一圈取出兩個相鄰的元素，轉換成unicode後指定到變數num_2與num_1裡。
    if ((num_2 - num_1) !== 1){
      return String.fromCodePoint((num_2 + num_1) / 2); 
    }
    //接著再用判斷式將這一圈取出來的相鄰數字相減，抓出不等於一即未連續的組合，相加除二便得缺漏的數字。
  }
}
console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P