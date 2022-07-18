// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
    const arr = str.split('')
    // 先分割成字串陣列
    const result = []
    // 做一個空陣列
    arr.forEach(function(elm){
        if (arr.indexOf(elm) !== arr.length -1){
            result.push(elm + arr[arr.indexOf(elm) + 1])
            arr.splice((arr.indexOf(elm) + 1), 1)
        } else {
            result.push(elm + '_')
        }
    })
    // 最後一個元素加底線，其餘，相鄰相加後，刪掉後者元素
    return result
}

console.log(splitString("abcdef")) // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")) // ["ab", "cd", "ef", "g_"]
console.log(splitString("")) // []