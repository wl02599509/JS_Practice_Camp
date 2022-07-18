// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
    const arr = str.split('')
    // 先分割成字串陣列
    let index = 0
    return arr.map(function(elm){
        if (arr.indexOf(elm) !== arr.length -1) {
            const result = elm + arr[arr.indexOf(elm) + 1];
            arr.splice((arr.indexOf(elm) + 1), 1);
            return result;
        } else {
            return elm + '_';
        }
    }).slice(0, arr.length);
    //用 slice 對 map 完的陣列進行重組，把後面的empty itme拿掉
}

console.log(splitString("abcdef")) // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")) // ["ab", "cd", "ef", "g_"]
console.log(splitString("")) // []