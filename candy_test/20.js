// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
    const arr = str.split('');
    const oOArr = arr.filter((elm) => elm === "o" || elm === "O" );
    const xXArr = arr.filter((elm) => elm === "x" || elm === "X");
    // 分別過濾出 o 跟 x 到兩組新陣列。
    return oOArr.length === xXArr.length;
    // 比較兩組陣列的長度，即判斷是否一樣多。
}


console.log(xxoo("ooxx")) // true
console.log(xxoo("xxoo")) // true
console.log(xxoo("xxooo")) // false
console.log(xxoo("xoox")) // true
console.log(xxoo("ooAA")) // false
console.log(xxoo("xoXoA")) // true