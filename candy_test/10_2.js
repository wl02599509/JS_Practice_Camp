// 編號：010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
    const unitWords = num.toString().split('');
    const length = unitWords.length;
    
    //用map迴圈重組陣列元素
    const result = unitWords.map( function(elm) {
        if ( elm !== '0' ) {
            if ( elm !== unitWords[length - 1 ] ){
                return elm.replace(elm, `${10 ** (length - 1 - unitWords.indexOf(elm))} x ${elm} + `);
                //針對非0與非末位元素的其他元素，增加10次方、乘號、自己本身與加號
            } else {
                return elm;
                //回傳非0但是末位元素 
            }
        } else {
            return;
            //跳過0的元素
        }
    })
    
    const  noUndefined = result.filter( (elm) => { if (elm) { return elm } })
    //過濾掉 undefined (在判斷式裡為false)

    return noUndefined.map( function (elm) {
                            if ( noUndefined.indexOf(elm) === noUndefined.length - 1 && elm.includes('+')) {
                                return elm.replace(" + ", "");
                            } else {
                                return elm
                            }
                        })
    //用 map 將 原 num 裡，跟 0 相鄰的尾數所增加的 + 消掉。
                        .join('');
}
console.log(expandedForm(8)) // 印出 "8"
console.log(expandedForm(25)) // 印出 "10 x 2 + 5"
console.log(expandedForm(148)) // 印出 "100 x 1 + 10 x 4 + 8"
console.log(expandedForm(1450)) // 印出 "1000 x 1 + 100 x 4 + 10 x 5"
console.log(expandedForm(60308)) // 印出 "10000 x 6 + 100 x 3 + 8"