for(var i = 0; i < 3; i ++){
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}
// 會印出什麼？
// 那如果要印出 0 1 2？
// var 改 let  如下：
for(let i = 0; i < 3; i ++){
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}

// 原因：console.log(i) 的 i 會先把 let 跑回圈時，當下的 i 抓下來包起來一起排隊，等 for 迴圈跑完後再印出
// 這叫做 Closure 閉包

// 07/22 16:40