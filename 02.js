// var age = 20

// if(age >= 18){
//     console.log("已成年")
// }

// let age = 31
// (age >= 18) ? console.log("已成年"):console.log("未成年")

let age =10

if (age >= 18) {
    console.log("已成年")
  } else if (age >= 12 && age < 18) {
    console.log("青少年")
  } else {
    console.log("小朋友")
  }



let state = "下雨天"

switch (state) {
    case "下雨天" :
        console.log("待在家");
        break
    case "出太陽":
        console.log("出去玩");
        break
    default:
        console.log("睡覺");
        break
}



