// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
    const arr = [...sequence];
    //將傳入的字串在陣列裡展開，便成字元字串陣列
    let i = 0
    while (arr.length > 1) {
        if ( i === arr.length ){
            break;
        }

        if (arr[i] === arr[i+1]) {
            arr.splice(i, 1);
        } else {
            i++
        }
        //陣列裡相鄰的元素兩兩比較，如果一樣就把一個刪掉，因為splice會改變原陣列，所以用同樣索引值跑再繼續splice，會得到下一組相鄰元素。
        //如果相鄰元素不相同，索引值就 i 就 +1 ，往前找。
    }
    return arr;
}

console.log(uniqueOrder("AABCC")) // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")) // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])) // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])) // [1, 2, 1]