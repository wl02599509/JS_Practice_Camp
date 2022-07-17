// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
    const order =  numbers.sort();
    //先將引數陣列進行排序

    let i = 0
    while( order.length > 1){
        if ( order[i] === order[i+1] ){
            order.splice(order.indexOf(order[i]), 2)
        //兩兩比較，如果一樣，splice刪掉這兩個相同的元素
        } else {
            i++ ;
        //不一樣，則 i++ ，往後比較
        }
        //迴圈直到陣列只剩下那一個奇數數量的元素
    }
    return order[0];
    //回傳它
}

console.log(findOddElm([1, 1, 2])) // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])) // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])) // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])) // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 印出 5