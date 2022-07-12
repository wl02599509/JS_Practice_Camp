// 編號：006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值
// 範例：

function findDifferent(numbers) {
    const orderList =  numbers.sort();
    //先將陣列由小至大排序
    const lastNum = orderList[orderList.length-1];
    const lastTwoNum = orderList[orderList.length-2];
    if(orderList[0] !== orderList[1]){
        return orderList[0];
    //如果第一個元素跟第二個元素不同，則回傳第一個元素。
    }else if((lastNum) !== lastTwoNum){
        return lastNum;
    //如果最後一個元素不等於倒數第二個元素，則回傳最後一個元素。
    }
}
console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2]));       // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8