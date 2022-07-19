// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
    return str.split('_') 
              //把字串用 _ 進行分割
              .map( (words, index) => {
                    if ( index !== 0 ) {
                        const vacbs = words.split('');
                        //將非首位的字串們，分割
                        return [...vacbs[0].toUpperCase(), words.slice(1, vacbs.length)].join('');
                        //取出第一個字變大寫，加上剩餘字串，加再一起變陣列，合併。
                    } else {
                        return words;
                    }
                  })
              .join('');
              //合併
}

console.log(toCamelCase("book")) // book
console.log(toCamelCase("book_store")) // bookStore
console.log(toCamelCase("get_good_score")) // getGoodScore