// 編號：004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式




function humanReadableTimer(seconds) {
    const timeScale = (num) => { return num.toString().padStart(2, "0"); }
    //讓每個時間計算出來的數字，轉換成字串後，再透過 .padStart 讓10以下的數字前面可以多一個0
    // String.padStart(length, string)，如果String內的字量小於length，就會在前面補上string，到滿足length為止
    const hour = timeScale((Math.floor(seconds / 3600)));
    //將傳進來的引數化為小時，使用Math.floor，把計算結果的小數點無條件捨去，只留整數為小時。
    const minute = timeScale((Math.floor((seconds - hour * 3600) / 60)));
    //先把引數減掉小時的秒數，在換算成分鐘
    const second = timeScale((seconds - (hour * 3600 + minute * 60)));
    //把引數減掉時與分的時間，剩下為秒
    const clock = (hour + ":" + minute + ":" + second);
    return clock;
}
  



console.log(humanReadableTimer(0))      // 印出 00:00:00
console.log(humanReadableTimer(59))     // 印出 00:00:59
console.log(humanReadableTimer(60))     // 印出 00:01:00
console.log(humanReadableTimer(90))     // 印出 00:01:30
console.log(humanReadableTimer(3599))   // 印出 00:59:59
console.log(humanReadableTimer(3600))   // 印出 01:00:00
console.log(humanReadableTimer(45296))  // 印出 12:34:56
console.log(humanReadableTimer(86399))  // 印出 23:59:59
console.log(humanReadableTimer(86400))  // 印出 24:00:00
console.log(humanReadableTimer(359999)) // 印出 99:59:59