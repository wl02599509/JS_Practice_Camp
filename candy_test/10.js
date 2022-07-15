// 編號：010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
    //將傳入的數字先轉換為字串，再套用split('')將數字分割成字元。
    const numberArr = String(num).split('');  

    //把 0 補上。
    const addZeroToNumber = function(elm){
        if(numberArr.length == 1){
            return elm
        }else if(numberArr.length - 1 == numberArr.indexOf(elm)){
            return elm;
        }else if(Number(elm) !== 0){
            return elm.padStart(4, ' x ');
        }else{
            return elm
        }
    }
    const arrWithCross = numberArr.map(addZeroToNumber);

    //增加 x 。
    const addCross = function(elm){
        if(elm.startsWith(' x ')){
            return elm.padStart(arrWithCross.length - 1 - arrWithCross.indexOf(elm) + 4, 0);
        }else{
            return elm;
        }
    }
    const zeroArr = arrWithCross.map(addCross);

    //把 '0' 字串元素去掉。
    const arrWithoutZeroElm = zeroArr.filter((elm) => elm != '0');

    //把 + 新增到陣列裡的數字間。
    const length = arrWithoutZeroElm.length;
    for(let i = 1; i <= length; i += 2){
        if(length > 1){
            arrWithoutZeroElm.splice(i, 0, " + ");
        }
    }
    
    //把 1 補到 0 前面。
    const addOne = function(elm){
        if(elm.startsWith('0')){
            const apartZeroElm = elm.split('');
            apartZeroElm.unshift('1');
            const combinationArr = apartZeroElm.join('');
            return combinationArr ;
        }else{
            return elm;
        }
    }
    const result = arrWithoutZeroElm.map(addOne)

    //把陣列合併後回傳。
    return result.join('');
}
console.log(expandedForm(8)) // 印出 "8"
console.log(expandedForm(25)) // 印出 "10 x 2 + 5"
console.log(expandedForm(148)) // 印出 "100 x 1 + 10 x 4 + 8"
console.log(expandedForm(1450)) // 印出 "1000 x 1 + 100 x 4 + 10 x 5"
console.log(expandedForm(60308)) // 印出 "10000 x 6 + 100 x 3 + 8"