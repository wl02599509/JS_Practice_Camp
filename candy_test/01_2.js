// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
    let order_list = arr.sort(function(compare_one, compare_two){
        let compare_result = compare_one - compare_two
        return compare_result
    })
    //先使用sort與comparefunction將arr陣列中的元素，由小排到大

    let sum = order_list[0] + order_list[1]
    //再從已排序好的陣列中，取出索引值0與1，也就是前兩小的數字，並相加

    return sum
  }
  
  const list1 = [19, 5, 42, 2, 77]
  const list2 = [23, 15, 59, 4, 17]
  
  console.log(sumOfSmallestValues(list1)) // 印出 7
  console.log(sumOfSmallestValues(list2)) // 印出 19