let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {
    arr.forEach(function(elm){
        if (elm === 0){
            const zero = arr.indexOf(0);  
            arr.splice(zero, 1);                    
            arr.push(0);
        }                           
    });
    return arr;
}

let result = moveZerosToEnd(list)
console.log(result)  // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
