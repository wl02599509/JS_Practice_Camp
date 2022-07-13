// 編號：010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
    //將傳入的數字先轉換為字串，再套用split('')將數字分割成字元。
    const numberArr = String(num).split('')  

    //把 0 補上
    const arrWithCross = numberArr.map(function(elm){
        if(numberArr.length == 1){
            return elm
        }else if(numberArr.length - 1 == numberArr.indexOf(elm)){
            return elm;
        }else if(Number(elm) !== 0){
            return elm.padStart(4, ' x ');
        }else{
            return elm
        }
    })

    //增加 x 
    const zeroArr = arrWithCross.map(function(elm){
        if(elm.startsWith(' x ')){
            return elm.padStart(arrWithCross.length - 1 - arrWithCross.indexOf(elm) + 4, 0);
        }else{
            return elm;
        }
    })

    //把 '0' 字串元素去掉。
    const arrWithoutZeroElm = zeroArr.filter((elm) => elm != '0');

    //把 + 新增到陣列裡的數字間。
    const length = arrWithoutZeroElm.length
    for(let i = 1; i <= length; i+=2){
        if(length > 1){
            arrWithoutZeroElm.splice(i, 0, " + ");
        }
    }
    // return arrWithoutZeroElm
    const addOne = arrWithoutZeroElm.map(function(elm){
        if(elm.startsWith('0')){
            arrWithoutZeroElm.splice(arrWithoutZeroElm.indexOf(elm), 0, "1");
        }else{
            return elm;
        }
    })
    return addOne;

    // return arrWithoutZeroElm.join('')
}
console.log(expandedForm(8)) // 印出 "8"
console.log(expandedForm(25)) // 印出 "10 x 2 + 5"
console.log(expandedForm(148)) // 印出 "100 x 1 + 10 x 4 + 8"
console.log(expandedForm(1450)) // 印出 "1000 x 1 + 100 x 4 + 10 x 5"
console.log(expandedForm(60308)) // 印出 "10000 x 6 + 100 x 3 + 8"