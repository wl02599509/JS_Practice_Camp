// for (var a = 1; a < 5; a += 1){
// 	console.log("a");
// }



for (var i = 0; i < 10; i++) {
    if (i % 2 == 0 && i > 0) {  
        console.log(i);
    }
}


// while (true) {
//     #印出1~10
// }

let a = 1
while (true) {
  console.log(a)
  a = a + 1
  if (a > 10) {
    break
  }
}