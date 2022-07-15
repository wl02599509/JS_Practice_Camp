// 編號：006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值
// 範例：

function findDifferent(numbers) {
    for(let i = 1; i < numbers.length - 3; i++){
        const previousElm = numbers[i-1];
        const currentElm = numbers[i];
        const afterElm = numbers[i+1];
        //先將陣列的當前與其前後的元素索引定義出來並指定給變數

        //0跟2相同，但0跟1不同時，取1
        if (previousElm == afterElm & previousElm !== currentElm){
            return currentElm;
        //0跟1相同，但0跟2不同時，取2
        }else if(previousElm !== currentElm){
            return previousElm;
        //2跟1相同，但2跟0不同時，取0
        }else if(afterElm !== currentElm){
            return afterElm;
        }
        //在用判斷式進行兩兩比較，抓出不同的元素。
    }
}
console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2]));       // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8