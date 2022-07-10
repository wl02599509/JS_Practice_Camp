// 編號：006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值
// 範例：

function findDifferent(numbers) {

    for(let i = 0; i < numbers.length -1; i++){
        const foreNum = numbers[i];
        const backNum = numbers[i+1];
        //將參數陣列中的元素前後以相除是否為一比對兩兩是否相等，以找出不同的元素。
        if((foreNum / backNum) < 1 ){
            return backNum;
        //前數字與後數字相除小於1，代表是後數字不同。
        }else if ((foreNum / backNum) > 1){
            return foreNum;
        //反之，為前數字不同。
        }
    }
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2]));       // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8