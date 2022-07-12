// 編號：008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
    const sentenceArr = input.split('')
    const vacabularyArr = input.split(' ')
    let scoreArr = []
    let sum = 0

    sentenceArr.forEach(elm => {
        if(elm == ' '| elm.indexOf() == sentenceArr.length -1){
            scoreArr.push(sum)
            sum = 0
        }else{
            sum += (elm.charCodeAt() - 96)
        }
    });
    const biggest = scoreArr.reduce(function(acc, cv){
        if (acc < cv){
            return cv;
        }else{
            return acc;
        }
    })
    return vacabularyArr[scoreArr.indexOf(biggest)];
}


console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there