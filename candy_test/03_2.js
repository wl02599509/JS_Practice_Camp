// 編號：003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面
// 範例：

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {
    const zeroArr = arr.filter(num => num === 0)
    //先把0從arr陣列挑出來成新陣列zeroArr
    const noZero = arr.filter(num => num !== 0)
    //再把arr裡非為0的元素挑出來成新陣列noZero
    const mix = [...noZero, ...zeroArr]
    // const mix = arr.concat(zeroArr)
    //兩組陣列展開並結合
    return mix;
}

let result = moveZerosToEnd(list)
console.log(result)  // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]



