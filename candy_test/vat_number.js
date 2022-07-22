function vatNumber(num){
    const vatArr = num.split('');
    const culcPrinciple = [1, 2, 1, 2, 1, 2, 4, 1];
    // return vatArr
    if (vatArr[6] !== 7) {
        const multiAdd = vatArr.map(function(elm, idx){
            const afterMultiElm = Number(elm) * culcPrinciple[idx];
            if (afterMultiElm > 10) {
                return String(afterMultiElm).split('').reduce((acc, cv) => Number(acc) + Number(cv));
            } else {
                return afterMultiElm;
            }
        })
        
        if (multiAdd.reduce((acc, cv) => acc + cv) % 5 === 0){
            return true
        } else {
            return false
        }
    } else {




        
    }
    
}


console.log(vatNumber("04595257"));
console.log(vatNumber("10458575"));