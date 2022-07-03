// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24
function sumOfSmallestValues(arr) {
    let first_num = arr.reduce(function(a, b){
        if (a < b){
            return a;
        } else {
            return b;
        }   
    })
    //先用reduce將arr陣列中第一個最小值取出來，指定給變數 first_num

    arr.splice(arr.indexOf(first_num), 1)
    //再用indexOf算出該最小值的索引序列，並用splice將之從arr陣列中刪除

    let second_num = arr.reduce(function(c, d){
        if (c < d){
            return c;
        } else {
            return d;
        }
    })
    //最後再使用reduce取出新陣列裡的最小值，並指定給變數 second_num

    return (first_num + second_num)
    //回傳兩個變數相加的結果
}
  
  const list1 = [19, 5, 42, 2, 77]
  const list2 = [23, 15, 59, 4, 17]
  
  console.log(sumOfSmallestValues(list1)) // 印出 7
  console.log(sumOfSmallestValues(list2)) // 印出 19