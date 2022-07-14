function sumOfString(str){
    const sum = str.split('').reduce((acc, cv) => Number(acc) + Number(cv));
    return sum;
}

console.log(sumOfString("9527"));