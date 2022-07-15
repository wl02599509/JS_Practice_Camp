// 編號：007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！
// 範例：

function findSomeDifferent(numbers) {
    //先算出陣列總和
    const find_odd = numbers.filter((elm) => elm % 2 !== 0)
    const find_even = numbers.filter((elm) => elm % 2 !== 1)
    console.log(find_even)
    console.log(find_odd)

}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160