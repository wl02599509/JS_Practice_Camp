// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  return str.split('_') 
            //把字串用 _ 進行分割
            .map( (words, index) => {
                  if ( index !== 0 ) {
                    const capitalUnicode = String.fromCharCode(words.split('')[0].charCodeAt()-32);
                    //讓非首位的字串，分割，取第一個字母，轉換成 unicode，-32，變成相對字母的大寫unicode，然後再轉換成字母字串，把大寫字母指定到變數 capitalUnicode
                    return words.replace(words.split('')[0], capitalUnicode);
                    //取代掉開頭小寫字母
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