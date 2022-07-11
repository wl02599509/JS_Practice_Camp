// 編號：006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值
// 範例：

function findDifferent(numbers) {
    const order_list =  numbers.sort();
    //先將陣列由小至大排序
    if(order_list[0] !== order_list[1]){
        return order_list[0];
    //如果第一個元素跟第二個元素不同，則回傳第一個元素
    }else if((order_list[order_list.length-1]) !== order_list[order_list.length-2]){
        return order_list[order_list.length-1];
    //如果最後一個元素不等於倒數第二個元素，則回傳最後一個元素。
    }
}
console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2]));       // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8