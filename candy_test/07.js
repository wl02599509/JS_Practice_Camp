// 編號：007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！
// 範例：

function findSomeDifferent(numbers) {
    const sum =  numbers.reduce((acc, cv) =>  acc + cv);
    //先算出陣列總和
    const find_odd = numbers.filter((elm) => elm % 2 == 1);
    const find_even = numbers.filter((elm) => elm % 2 == 0);
    // return sum
    if (sum % 2 == 0){
    //總和除二的餘數為1，代表有個奇數混入偶數陣列裡。
        return find_even.shift();
    //再透過filter把每個元素，進行驗算，找出餘數為1的元素
    }else{
    //如果總和除二的餘數為0，代表是有偶數混入奇數陣列裡。
        return find_odd.shift();
    }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160