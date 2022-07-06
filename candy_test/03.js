// 編號：003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面
// 範例：

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {
    arr.forEach(function(elm){             
        if (elm === 0){                    //用判斷式將每一個被forEach抓出來的元素比對是否為0，如果為0，
            const zero = arr.indexOf(0);   //用indexOf找出它陣列中的索引值
            arr.splice(zero, 1);           //把0從陣列中刪去         
            arr.push(0);                   //把0放到陣列後面
        }                           
    });
    return arr;
}

let result = moveZerosToEnd(list)
console.log(result)  // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
