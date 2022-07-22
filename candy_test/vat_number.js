function vatNumber(num){
    const vatArr = num.split('');
    const culcPrinciple = [1, 2, 1, 2, 1, 2, 4, 1]; //將邏輯乘數排成陣列
    
    //讓引數統編與邏輯乘數依序相乘，如果相乘結果的元素數字大於10就將該元素轉字串並分割後相加再回傳，最後組成一組乘積之和的陣列。
    const multiAddSum = vatArr.map(function(elm, idx){
        const afterMultiElm = Number(elm) * culcPrinciple[idx];
        if (afterMultiElm >= 10) {
            return String(afterMultiElm).split('').reduce((acc, cv) => Number(acc) + Number(cv));
        } else {
            return afterMultiElm;
        }
    })

    //接著開始判斷第七位數是否為 7
    if (vatArr[6] !== '7') {
        //不為 7 者，乘積和相加被 5 整除為 true，反之，false
        return (multiAddSum.reduce((acc, cv) => acc + cv) % 5 === 0)
    } else {
        //為 7 者，先全部相加，在判斷倒數第二位取 1 或 0，其中一個被 5 整除者，為true，反之，false
        const sum = multiAddSum.reduce((acc, cv) => acc + cv)
        return ((sum - 10) % 5 === 0 || (sum - 9) % 5 === 0) 
    }    
}


console.log(vatNumber("04595257")); // true
console.log(vatNumber("04595252")); // true
console.log(vatNumber("10458575")); // true
console.log(vatNumber("10458574")); // true