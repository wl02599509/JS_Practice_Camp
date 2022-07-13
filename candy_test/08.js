// 編號：008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
    const sentenceArr = input.split('')
    //將句子字串切割成一組字元字串，且包含空白字串的陣列
    const vacabularyArr = input.split(' ')
    //將句子字串切割成一組單字字串的陣列
    let scoreArr = []
    let sum = 0
    //將 sentenceArr 用 forEach，把一個個字元字串抓來轉換成 unicode 後減去96換算成題目分數，並進行相加;如果遇到空白字串元素或元素索引等於 sentenceArr 長度 -1 時（因為最後一個元素後面不會有空白），就把相加總和塞到新陣列 scoreArr 裡，並且重新計算新的總和。
    sentenceArr.forEach(elm => {
        if(elm == ' '| elm.indexOf() == sentenceArr.length -1){
            scoreArr.push(sum)
            sum = 0
        }else{
            sum += (elm.charCodeAt() - 96)
        }
    });
    //取得分數的陣列後，再將最大值取出指定給 biggest
    const biggest = scoreArr.reduce(function(acc, cv){
        if (acc < cv){
            return cv;
        }else{
            return acc;
        }
    })
    //最後用indexOF將最大值於 scoreArr 的索引值套到 vacabularyArr，即可找到是哪個單字。
    return vacabularyArr[scoreArr.indexOf(biggest)];
}


console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there