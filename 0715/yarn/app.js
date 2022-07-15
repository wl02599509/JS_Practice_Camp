import hi, { addNumber, isEven } from "./math_tool"
//沒有大括號的為引入「預設」
import hi from "./math_tool" 
//也可獨立出來，而預設的部分，名字無所謂，因為設定就是預設的匯出，但不能用大括號{ }，即使名字對了也是會 undefined

import ax from 'axios'
console.log(ax)

// const result = addNumber(3, 4)
// console.log(result)

// console.log(isEven(4))

// console.log(hi())